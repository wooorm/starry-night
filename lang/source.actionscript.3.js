// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/simongregory/actionscript3-tmbundle>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['text.html.asdoc', 'text.xml'],
  extensions: ['.as'],
  names: ['actionscript', 'actionscript-3', 'actionscript3', 'as3'],
  patterns: [
    {include: '#package'},
    {include: '#imports'},
    {include: '#class'},
    {include: '#included'},
    {include: '#embedded-in-mxml'},
    {include: '#comments'},
    {include: '#block'},
    {include: '#block-contents'},
    {include: '#comments'},
    {include: '#comments'},
    {include: '#strings'},
    {include: '#regexp'},
    {include: '#numbers'},
    {include: '#language-elements'},
    {include: '#frameworks'},
    {include: '#variables'},
    {include: '#embedded-xml'},
    {include: '#class-name'},
    {include: '#class-extends'},
    {include: '#class-implements'},
    {include: 'text.html.asdoc'},
    {include: '#strings'},
    {include: '#regexp'},
    {include: '#numbers'},
    {include: '#comments'},
    {include: '#variables'},
    {include: '#compiler-metadata'},
    {include: '#compiler-metadata-custom'},
    {include: '#language-elements'},
    {include: '#support-classes'},
    {include: '#language-storage'},
    {include: '#methods-all'},
    {include: '#method-block'},
    {include: 'text.html.asdoc'},
    {include: '#imports'},
    {include: '#strings'},
    {include: '#regexp'},
    {include: '#numbers'},
    {include: '#comments'},
    {include: '#variables'},
    {include: '#compiler-metadata'},
    {include: '#compiler-metadata-custom'},
    {include: '#language-elements'},
    {include: '#support-classes'},
    {include: '#methods-all'},
    {include: '#method-block'}
  ],
  repository: {
    block: {
      begin: '\\{',
      contentName: 'meta.scope.block.actionscript.3',
      end: '\\}',
      patterns: [{include: '#block'}, {include: '#block-contents'}]
    },
    'block-contents': {
      patterns: [
        {include: '#comments'},
        {include: '#strings'},
        {include: '#regexp'},
        {include: '#numbers'},
        {include: '#language-elements'},
        {include: '#frameworks'},
        {include: '#variables'},
        {include: '#embedded-xml'}
      ]
    },
    class: {
      begin:
        '(?x)\t\t\t\t\t\t\t# Turn on extended mode\n\t\t\t\t\t  ^\\s*\t\t\t\t\t\t\t# Start of line and optional whitespace\n\t\t\t\t\t  (\\b(dynamic|final)\\b\\s+)?\t\t# Optional dynamic or final\n\t\t\t\t\t  (\\b(internal|public)\\b\\s+)?\t# Optional public or internal\n\t\t\t\t\t  (\\b(dynamic|final)\\b\\s+)?\t\t# Optional dynamic or final\n\t\t\t\t\t  (?=class)\t\t\t\t\t\t# Class definition\n\t\t\t\t\t',
      beginCaptures: {
        2: {name: 'storage.type.modifier.actionscript.3'},
        4: {name: 'storage.type.namespace.actionscript.3'},
        6: {name: 'storage.type.modifier.actionscript.3'}
      },
      end: '\\}',
      endCaptures: {
        1: {name: 'punctuation.definition.block.end.actionscript.3'}
      },
      name: 'meta.class.actionscript.3',
      patterns: [
        {include: '#class-name'},
        {include: '#class-extends'},
        {include: '#class-implements'},
        {include: 'text.html.asdoc'},
        {include: '#strings'},
        {include: '#regexp'},
        {include: '#numbers'},
        {include: '#comments'},
        {include: '#variables'},
        {include: '#compiler-metadata'},
        {include: '#compiler-metadata-custom'},
        {include: '#language-elements'},
        {include: '#support-classes'},
        {include: '#language-storage'},
        {include: '#methods-all'},
        {include: '#method-block'}
      ]
    },
    'class-extends': {
      begin: '\\b(extends)\\b\\s+\\b(\\w+)\\b\\s*',
      beginCaptures: {
        1: {name: 'storage.modifier.actionscript.3'},
        2: {name: 'entity.name.type.class.actionscript.3'}
      },
      end: '((?=implements)|(\\{))',
      name: 'meta.definition.class.extends.actionscript.3',
      patterns: [
        {include: '#support-classes'},
        {include: '#comments'},
        {include: '#package-path'},
        {
          match: '\\b(\\w+)\\b\\s*',
          name: 'invalid.illegal.unexpected-extends.actionscript.3'
        },
        {
          match: '[^\\s}a-zA-Z0-9.]',
          name: 'invalid.illegal.unexpected-extends-character.actionscript.3'
        }
      ]
    },
    'class-implements': {
      begin: '\\b(implements)\\b\\s+',
      beginCaptures: {1: {name: 'storage.modifier.actionscript.3'}},
      end: '(?={extends)|(\\{)',
      name: 'meta.definition.class.implements.actionscript.3',
      patterns: [
        {include: '#support-classes'},
        {include: '#comments'},
        {
          match: '\\b(\\w+)\\b\\s*',
          name: 'entity.name.type.class.actionscript.3'
        },
        {include: '#package-path'},
        {match: ',', name: 'punctuation.seperator.implements.actionscript.3'},
        {
          match: '[^\\s\\}]',
          name: 'invalid.illegal.expected-implements.seperator.actionscript.3'
        }
      ]
    },
    'class-name': {
      begin:
        '(?x)\n\t\t\t\t\t (?<=class)\t\t# look behind for class\n\t\t\t\t\t \\s+\t\t\t# At least one character of whitespace\n\t\t\t  \t\t (\\w+)\\b\t\t# The name of the class.\n\t\t\t\t\t',
      beginCaptures: {1: {name: 'entity.name.type.class.actionscript.3'}},
      end: '((?=implements|extends)|(\\{))',
      endCaptures: {
        3: {name: 'punctuation.definition.block.end.actionscript.3'}
      },
      patterns: [
        {match: '\\S+', name: 'invalid.illegal.unexpected.actionscript.3'}
      ]
    },
    comments: {
      patterns: [
        {begin: '/\\*', end: '\\*/', name: 'comment.block.actionscript.3'},
        {match: '//.*$\\n?', name: 'comment.line.double-slash.actionscript.3'}
      ]
    },
    'compiler-metadata': {
      begin:
        '(\\[)\\s*\\b(AccessibilityClass|ArrayElementType|Bindable|DataBindingInfo|DefaultBindingProperty|DefaultProperty|DefaultTriggerEvent|Effect|Embed|Event|Exclude|ExcludeClass|Frame|IconFile|Inspectable|InstanceType|Mixin|NonCommittingChangeEvent|RequiresDataBinding|ResourceBundle|RemoteClass|SkinStates|SkinPart|Style|Transient)\\b',
      beginCaptures: {
        1: {name: 'punctuation.definition.meta-data.begin.actionscript.3'},
        2: {name: 'entity.name.type.meta-data.actionscript.3'}
      },
      end: '(\\])',
      endCaptures: {
        1: {name: 'punctuation.definition.meta-data.end.actionscript.3'}
      },
      name: 'storage.type.meta-data.actionscript.3',
      patterns: [{include: '#strings'}]
    },
    'compiler-metadata-custom': {
      begin: '(\\[)\\s*\\b(\\w+)\\b',
      beginCaptures: {
        1: {name: 'punctuation.definition.meta-data.begin.actionscript.3'},
        2: {name: 'entity.name.type.meta-data.custom.actionscript.3'}
      },
      end: '(\\])',
      endCaptures: {
        1: {name: 'punctuation.definition.meta-data.end.actionscript.3'}
      },
      name: 'storage.type.meta-data.custom.actionscript.3',
      patterns: [{include: '#strings'}]
    },
    'compiler-metadata-swf': {
      begin: '(\\[)\\s*\\b(SWF)\\b',
      beginCaptures: {
        1: {name: 'punctuation.definition.meta-data.begin.actionscript.3'},
        2: {name: 'entity.name.type.meta-data.actionscript.3'}
      },
      end: '(\\])',
      endCaptures: {
        1: {name: 'punctuation.definition.meta-data.end.actionscript.3'}
      },
      name: 'storage.type.meta-data.actionscript.3',
      patterns: [{include: '#strings'}]
    },
    'embedded-in-mxml': {
      begin: '<!\\[CDATA\\[',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.xml.mxml'}
      },
      end: '\\]\\]>',
      endCaptures: {0: {name: 'punctuation.definition.string.end.xml.mxml'}},
      patterns: [
        {include: 'text.html.asdoc'},
        {include: '#imports'},
        {include: '#strings'},
        {include: '#regexp'},
        {include: '#numbers'},
        {include: '#comments'},
        {include: '#variables'},
        {include: '#compiler-metadata'},
        {include: '#compiler-metadata-custom'},
        {include: '#language-elements'},
        {include: '#support-classes'},
        {include: '#methods-all'},
        {include: '#method-block'}
      ]
    },
    'embedded-xml': {
      patterns: [
        {
          begin: '(?=<[a-zA-Z])',
          beginCaptures: {
            1: {name: 'storage.type.actionscript.3'},
            3: {name: 'support.type.function.global.actionscript.3'}
          },
          contentName: 'text.xml',
          end: '(?<=>)\\s*;',
          name: 'meta.embedded.xml',
          patterns: [{include: 'text.xml'}]
        }
      ]
    },
    'framework-fl': {
      patterns: [
        {
          match:
            '\\b(R(IGHT|OTATION|E(MOVE(_ALL|D(_FROM_STAGE)?)?|SIZ(ING|E)|NDER(ER_STYLES)?|PLACE|WIND(ING)?|ADY))|X|M(ISSING_SKIN_STYLE|O(TION_(RESUME|ST(OP|ART)|CHANGE|UPDATE|END|FINISH|LOOP)|USE(_LEAVE)?|VE)|ETADATA_RECEIVED|A(NUAL|INTAIN_ASPECT_RATIO))|B(OTTOM(_(RIGHT|LEFT))?|U(TTON_DOWN|FFERING(_STATE_ENTERED)?))|S(HO(RT_VERSION|W)|C(R(OLL|UB_(START|FINISH))|ALE_(X|Y))|T(YLES|OPPED(_STATE_ENTERED)?|ATE(_CHANGE)?)|IZE|O(RT|CKET_DATA|UND_(COMPLETE|UPDATE))|E(EK(ING|ED)|LECT(ED)?)|K(IN_(ERROR|LOADED)|EW_(X|Y))|QUARE)|H(IDE|ORIZONTAL|EADER_RELEASE)|Y|N(O(NE|_(BITRATE_MATCH|SCALE|CONNECTION))|ULL_URL_LOAD|E(TSTREAM_CLIENT_CLASS_UNSET|W_(ROW|COLUMN))|AVIGATION)|C(HANGE|CW|IRCLE|O(MPLETE|NNECT(ION_ERROR)?|LUMN_STRETCH)|UE_POINT|ENTER|W|LOSE|A(NCEL(LED)?|PTION_(CHANGE|TARGET_CREATED)))|T(RACK|HUMB(_(RELEASE|DRAG|PRESS))?|IME_CHANGE|OP(_(RIGHT|LEFT))?|EXT_INPUT|AB_(CHILDREN_CHANGE|INDEX_CHANGE|ENABLED_CHANGE))|I(N(CMANAGER_CLASS_UNSET|IT|VALID(_(XML|S(OURCE|EEK))|ATE(_ALL)?))?|TEM_(ROLL_O(UT|VER)|CLICK|DOUBLE_CLICK|EDIT_(BEGIN(NING)?|END)|FOCUS_(IN|OUT))|D3|LLEGAL_CUE_POINT)|O(N|THER|UT|PEN|FF)|D(ISCONNECTED|E(FAULT_TIMEOUT|LETE_DEFAULT_PLAYER|ACTIVATE)|ATA(_CHANGE)?)|UN(SUPPORTED_PROPERTY|LOAD)|P(R(OGRESS|E_DATA_CHANGE)|OLLED|LAY(HEAD_UPDATE|ING(_STATE_ENTERED)?)|AUSED(_STATE_ENTERED)?)|E(RROR|XACT_FIT|NTER(_FRAME)?|VENT)|VER(SION|TICAL)|KEYBOARD|F(ULLSCREEN|LV|AST_FORWARD)|L(INK|OADING|EFT|A(BEL_CHANGE|YOUT))|A(CTI(ONSCRIPT|VATE)|DD(ED(_TO_STAGE)?)?|UTO(_(REWOUND|LAYOUT))?|LL))\\b',
          name: 'support.constant.fl.actionscript.3'
        },
        {
          match:
            '\\b(s(howFocus|crollTo(Selected|Index)|t(op(ImmediatePropagation|Drag|Propagation)?|art(Transition|Drag)?)|ort(Items(On)?|On)?|paceColumnsEqually|e(t(R(otation(Radians)?|endererStyle)|MouseState|S(c(ale(X|Y)?|rollProperties)|t(yle|ring)|ize|election|kew(X(Radians)?|Y(Radians)?))|C(hildIndex|omponentStyle)|Tint|DefaultLang|Pro(perty(IsEnumerable)?|gress)|Value|F(ocus|LVCuePointEnabled)|LoadCallback)|ek(Seconds|To(N(extNavCuePoint|avCuePoint)|PrevNavCuePoint)|Percent)?)|wapChildren(At)?)|h(i(tTest(Object|Point)|deFocus)|elperDone|as(OwnProperty|EventListener))|RadioButton(Group)?|yoyo|n(c(Reconnected|Connected)|ext(Scene|Frame))|c(heckXMLStatus|on(nect(ToURL|Again)|cat|t(inueTo|ains))|l(o(se(VideoPlayer)?|ne)|ear(RendererStyle|S(tyle|election)|ComponentStyle)?)|reateItemEditor)|M(otion(Event)?|etadataEvent)|B(utton|ezier(Segment|Ease)|ase(Button|ScrollPane))|to(String|Array)|i(s(ItemSelected|DefaultPrevented|PrototypeOf|FLVCuePointEnabled)|n(terpolate(Color|Transform|Filter(s)?)|itialize|validate(Item(At)?|List)?)|temTo(CellRenderer|Label))|S(croll(Bar|Pane|Event)|tyleManager|imple(CollectionItem|Ease)|ou(ndEvent|rce)|electableList|kinErrorEvent|lider(Event)?)|HeaderRenderer|o(n(Resize|Update)|pen)|d(ispatchEvent|e(stroyItemEditor|activate)|raw(Now|Focus))|N(CManager(Native)?|umericStepper)|C(heckBox|o(lor(Picker(Event)?)?|m(ponentEvent|boBox))|ustomEase|ellRenderer|aption(ChangeEvent|TargetEvent))|u(nload|pdate)|T(ileList(CollectionItem|Data)?|ext(Input|Area)|ween(Event)?|ransitionManager)|I(ndeterminateBar|mageCell)|p(lay(WhenEnoughDownloaded)?|ause|r(opertyIsEnumerable|ev(Scene|entDefault|Frame)))|e(n(terFullScreenDisplayState|d|ableAccessibility)|ditField|ase(None|In(Out)?|Out|QuadPercent))|Data(Grid(C(olumn|ellEditor)|Event)?|ChangeEvent|Provider)|val(idateNow|ueOf)|UI(ScrollBar|Component|Loader)|f(ind(Ne(arestCuePoint|xtCuePointWithName)|CuePoint|FocusManagerComponent)|ormatToString|forward|romXML(String)?)|ProgressBar|willTrigger|lo(calToGlobal|ad(Bytes|String(Ex)?|LanguageXML)?)|a(ctivate|ttach(NetStream|Camera)|dd(RadioButton|XMLPath|C(hild(At)?|olumn(At)?)|Item(s(At)?|At)?|DelayedInstance|EventListener|Keyframe|ASCuePoint)|ppendText|ffectsTweenable|reInaccessibleObjectsUnderPoint)|Video(P(layer|rogressEvent)|E(vent|rror))|Keyframe|r(otateAround(InternalPoint|ExternalPoint)|e(s(ume|et)|connect|placeItem(At)?|freshPane|wind|gisterInstance|move(RadioButton|C(hild(At)?|olumnAt)|Item(At)?|EventListener|A(SCuePoint|ll(Columns)?))))|g(otoAnd(Stop|Play)|et(R(otation(Radians)?|e(ndererStyle|ct)|adioButton(Index|At))|Group|Bounds|S(cale(X|Y)|t(yle(Definition)?|ackTrace)|ingleValue|kew(X(Radians)?|Y(Radians)?))|YForX|Next(IndexAtLetter|Keyframe|FocusManagerComponent)|C(hild(ByName|Index|At)|o(l(orTransform|umn(Count|Index|At))|mponentStyle)|u(rrentKeyframe|bic(Roots|Coefficients))|ellRendererAt)|Tween|Item(Index|At)|ObjectsUnderPoint|DefaultLang|Property|V(ideoPlayer|alue)|QuadraticRoots|F(ilters|ocus)|LineMetrics)|lobalToLocal)|F(ocusManager|unctionEase|LVPlayback(Captioning)?)|m(ove|erge(Styles)?|atchInternalPointWithExternal)|bringVideoPlayerToFront|L(i(st(Data|Event)?|vePreviewParent)|a(youtEvent|bel(Button)?))|A(nimator|utoLayoutEvent))\\b(\\s)?',
          name: 'support.function.fl.actionscript.3'
        },
        {
          match:
            '\\b(s(ho(w(Headers|Captions|TextField|FocusIndicator)|rtcut)|ymbolName|napInterval|c(enes|ale(X|Mode|Y|Content|9Grid)|r(oll(Rect|Target|Drag|Po(sition|licy))|ubbing))|t(op(Button|ped)|epSize|a(te(Responsive)?|rtIndex|ge)|r(ingIDArray|eam(Height|Name|Width|Length)))|i(lent|mpleFormatting)|o(u(ndTransform|rce(F(ield|unction))?)|rt(CompareFunction|Index|Options|Descending|able(Columns)?))|e(ek(Bar(ScrubTolerance|Interval)?|ToPrevOffset)|lect(ion(BeginIndex|EndIndex)?|ed(Color|I(nd(ices|ex)|tem(s)?)|Data|Label)?|able))|k(in(Background(Color|Alpha)|ScaleMaximum|FadeTime|AutoHide)?|ew(X|Y))|moothing)|h(tmlText|itArea|orizontal(Scroll(Bar|Po(sition|licy))|PageScrollSize|LineScrollSize)|e(ight|ader(Renderer|Height|Text)|xValue))|y|n(cMgr|oAutoLabeling|um(RadioButtons|Children)|e(t(Stream(ClientClass)?|Connection)|xt(TabIndex|Value))|ame)|c(hangeType|o(n(structor|te(nt(Appearance)?|xtMenu)|denseWhite)|de|l(or(s)?|umn(s|Count|Index|Width)?))|u(ePoints|rrent(Scene|Target|Frame|Label(s)?))|ellRenderer|lickTarget|a(ncelable|cheAsBitmap|ption(Button|CuePointObject|Target(Name)?)))?|t(ype|i(nt(Multiplier|Color)|ckInterval|me(out)?)|o(tal(Time|Frames)|ggle)|ext(Snapshot|Height|Field|Width)?|ween(s|S(ync|nap|cale))|a(rget|b(Children|Index|Enabled))|r(iggerEvent|a(nsform(ationPoint)?|ck(AsMenu)?)))|i(s(RTMP|Playing|Live)|n(stanceName|ner(Height|Width)|de(terminate|x)|fo)|con(F(ield|unction))?|tem(s|Renderer|Editor(Instance)?)?|dleTimeout|NCManagerClass|meMode)|HORIZONTAL|o(paqueBackground|wner|ld(RegistrationBounds|Bounds)|rientToPath|bj)|d(i(splayAsPassword|rection|mensions)|oubleClickEnabled|uration|e(scription|faultButton(Enabled)?|lta|blocking)|ata(Provider|Field)?|rop(down(Width)?|Target))?|use(BitmapScrolling|Seconds|HandCursor)|p(o(sition(Matrix)?|ints)|ercent(Complete|Loaded)|lay(head(Time|UpdateInterval|Percentage)|Button|ing|PauseButton)|a(use(Button|d)|r(ent|ameters)|geS(crollSize|ize))|r(o(totype|p|gressInterval|mpt)|e(vi(ousValue|ew)|ferred(Height|Width))))|e(n(dIndex|abled)|dit(orDataField|edItem(Renderer|Position)|able)|ventPhase|lementType|as(ing(Function)?|e)|rrorID|mphasized)|v(i(sible(VideoPlayerIndex)?|deo(Height|Player(Index)?|Width))|olume(Bar(ScrubTolerance|Interval)?)?|p|er(sion|tical(Scroll(Bar|Po(sition|licy))|PageScrollSize|LineScrollSize))|alue)|key(Code|frames(Compact)?)|f(i(nish|lters|rstFrame)|o(cus(Rect|Manager|Enabled)|r(ceSimple|wardButton))|u(nc(tionName)?|llScreen(B(utton|ackgroundColor)|SkinDelay|TakeOver))|lvPlayback(Name)?|allbackServerName|rame(sLoaded|Rate))|w(idth|ordWrap)|l(i(stData|n(eScrollSize|kageID)|veDragging)|o(op(ing)?|aderInfo)|ength|a(nguageCodeArray|bel(Placement|F(ield|unction))?))|a(c(cessibilityProperties|tiveVideoPlayerIndex)|dded|uto(Re(p(eat|lace)|wind)|Size|Play|L(oad|ayout))|l(ign|pha(Multiplier|Offset)?|waysShowSelection|lowMultipleSelection))?|VERTICAL|r(o(tat(ion|e(Times|Direction))|ot|w(Height|Count|Index)?)|e(s(trict|izable(Columns)?)|d(Multiplier|Offset)|peatCount|ason|gistration(X|Height|Y|Width)))|gr(oup(Name)?|een(Multiplier|Offset)|aphics)|FPS|x|m(yInstance|in(imum|ScrollPosition|ColumnWidth|Width)|o(tion|de|use(X|Y|Children|Enabled|FocusEnabled))|uteButton|e(ssage|tadata(Loaded)?)|a(sk|intainAspectRatio|x(imum|ScrollPosition|HorizontalScrollPosition|Chars|VerticalScrollPosition)))|b(ytes(Total|Loaded)|itrate|u(ttonMode|ffer(ing(Bar(HidesAndDisablesOthers)?)?|Time)|bbles)|egin|l(ue(Multiplier|Offset)|endMode|ank)|ackButton|rightness)?)\\b',
          name: 'support.property.fl.actionscript.3'
        }
      ]
    },
    'framework-flash': {
      patterns: [
        {
          match:
            '\\b(R(GB|IGHT|O(UND|LL_O(UT|VER))|E(GULAR|MO(TE|VED(_FROM_STAGE)?)|SIZE|NDER|D|PEAT|FLECT)|ADIAL)|G(REEN|ET)|M(I(CROPHONE|TER)|OUSE_(MOVE|O(UT|VER)|DOWN|UP|FOCUS_CHANGE|WHEEL|LEAVE)|ULTIPLY|E(NU_(SELECT|ITEM_SELECT)|DIUM))|B(I(G_ENDIAN|NARY)|O(TTOM(_(RIGHT|LEFT))?|LD(_ITALIC)?)|UBBLING_PHASE|E(ST|VEL)|LUE|ACKSPACE)|S(H(IFT|OW_ALL)|YNC|CR(OLL|EEN)|TA(NDARD|TUS)|O(CKET_DATA|UND_COMPLETE)|UB(TRACT|PIXEL)|PACE|E(CURITY_ERROR|TTINGS_MANAGER|LECT)|QUARE)|H(TTP_STATUS|IGH|O(RIZONTAL|ME)|ARDLIGHT)|N(O(RMAL|NE|_(BORDER|SCALE))|UM(_PAD|PAD_(1|MULTIPLY|7|SUBTRACT|2|8|3|D(IVIDE|ECIMAL)|9|4|ENTER|5|0|ADD|6))|E(T_STATUS|VER))|C(RT|H(INESE|ANGE)|O(MPLETE|N(NECT|TROL)|LOR)|ENTER|L(ICK|OSE|AMP)|A(MERA|NCEL|P(S_LOCK|TURING_PHASE)))|T(IMER(_COMPLETE)?|OP(_(RIGHT|LEFT))?|EXT(_(NODE|INPUT))?|AB(_(CHILDREN_CHANGE|INDEX_CHANGE|ENABLED_CHANGE))?)|I(GNORE|ME_COMPOSITION|N(SERT|NER|IT|PUT|VERT)|TALIC|O_ERROR|D3)|O(UTER|PEN|VERLAY)|D(YNAMIC|IFFERENCE|O(UBLE_CLICK|WN)|E(VICE|FAULT|LETE|ACTIVATE)|A(RK(_COLOR|EN)|TA))|U(N(KNOWN|LOAD)|P(LOAD_COMPLETE_DATA)?)|J(USTIFY|APANESE_(HIRAGANA|KATAKANA_(HALF|FULL)))|P(R(IVACY|OGRESS)|IXEL|O(RTRAIT|ST)|ENDING|A(GE_(DOWN|UP)|D))|E(R(ROR|ASE)|XACT_FIT|MBEDDED|SCAPE|N(TER(_FRAME)?|D)|LEMENT_NODE)|V(ERTICAL|ARIABLES)|K(OREAN|EY_(DOWN|UP|FOCUS_CHANGE))|F(1(1|2|3|4|5|0)?|7|2|8|3|OCUS_(IN|OUT)|9|ULL(SCREEN|_SCREEN)?|4|5|L(USHED|ASH(1|7|2|8|3|9|4|5|6))|6)|WRAP|L(CD|I(GHT(_COLOR|EN)|N(EAR(_RGB)?|K)|TTLE_ENDIAN)|O(CAL_(STORAGE|TRUSTED|WITH_(NETWORK|FILE))|W)|EFT|A(YER|NDSCAPE))|A(MF(3|0)|SYNC_ERROR|CTI(ONSCRIPT(2|3)|V(ITY|ATE))|T_TARGET|D(D(ED(_TO_STAGE)?)?|VANCED)|UTO|L(PHA(NUMERIC_(HALF|FULL))?|WAYS)))\\b',
          name: 'support.constant.flash.actionscript.3'
        },
        {
          match:
            '\\b(s(how(Settings)?|c(ale|roll)|t(op(ImmediatePropagation|Drag|Propagation|All)?|art(Drag)?)|ubtract|e(nd|t(Mo(tionLevel|de)|S(tyle|ilenceLevel|elect(ion|Color|ed))|C(hildIndex|ompositionString|lipboard)|TextFormat|Dirty|UseEchoSuppression|P(ixel(s|32)?|roperty(IsEnumerable)?)|Empty|KeyFrameInterval|Quality|Loop(Back|back)|AdvancedAntiAliasingTable)|ek)|wapChildren(At)?)|h(i(tTest(TextNearPos|Object|Point)?|de(BuiltInItems)?)|as(Glyphs|ChildNodes|OwnProperty|Definition|EventListener))|Re(sponder|ctangle)|G(lowFilter|radient(GlowFilter|BevelFilter))|n(o(ise|rmalize)|ext(Scene|Frame))|c(o(n(nect|cat|tains(Rect|Point)?)|py(Channel|Pixels)|lorTransform|mp(uteSpectrum|are|ress))|urveTo|l(o(se|ne(Node)?)|ear)|a(ncel|ll)|reate(GradientBox|Box|TextNode|Element))|XML(Socket|Node|Document)|M(o(useEvent|vieClip)|emoryError|atrix)|B(yteArray|itmap(Data)?|evelFilter|lurFilter)|t(hreshold|o(String|gglePause)|rans(form(Point)?|late))|i(s(DefaultPrevented|PrototypeOf|Empty|FocusInaccessible|Accessible)|n(sertBefore|ter(sect(s|ion)|polate)|v(ert|alidate)|flate(Point)?)|dentity)|S(hape|yncEvent|criptTimeoutError|t(yleSheet|a(ckOverflowError|tusEvent))|impleButton|o(cket|und(Transform|LoaderContext)?)|prite|ecurityErrorEvent)|HTTPStatusEvent|offset(Point)?|d(is(tance|p(ose|atchEvent))|o(Conversion|wnload)|e(code|ltaTransformPoint)|raw(R(oundRect|ect)|Circle|Ellipse)?)|Net(St(atusEvent|ream)|Connection)|C(SMSettings|o(n(textMenu(BuiltInItems|Item|Event)?|volutionFilter)|lor(MatrixFilter|Transform)))|u(n(compress|ion|lo(ck|ad))|p(date(Properties|AfterEvent)|load))|T(imer(Event)?|ext(Event|F(ield|ormat)|LineMetrics))|I(nteractiveObject|MEEvent|OError(Event)?|llegalOperationError)|p(ixelDissolve|olar|ublish|erlinNoise|lay|a(use|letteMap|rse(XML|CSS))|r(opertyIsEnumerable|ev(Scene|entDefault|Frame)))|e(n(dFill|umerateFonts)|quals|xit)|D(i(spla(yObjectContainer|cementMapFilter)|ctionary)|ataEvent|ropShadowFilter)|valueOf|URL(Request(Header)?|Variables|Loader)|f(i(ndText|llRect)|ormatToString|l(oodFill|ush))|P(oint|r(intJob(Options)?|ogressEvent))|E(OFError|vent(Dispatcher)?|rrorEvent)|w(illTrigger|rite(MultiByte|B(yte(s)?|oolean)|Short|Int|Object|D(ynamicPropert(y|ies)|ouble)|U(nsignedInt|TF(Bytes)?)|External|Float))|l(ine(GradientStyle|Style|To)|o(c(k|alToGlobal)|ad(Bytes|PolicyFile)?))|a(ttach(NetStream|Camera|Audio)|dd(Header|C(hild(At)?|allback)|Page|EventListener)?|pp(end(Child|Text)|lyFilter)|llow(InsecureDomain|Domain)|re(SoundsInaccessible|InaccessibleObjectsUnderPoint))|Video|KeyboardEvent|r(otate|e(s(ume|et)|ceive(Video|Audio)|place(SelectedText|Text)|ad(MultiByte|B(yte(s)?|oolean)|Short|Int|Object|Double|U(nsigned(Byte|Short|Int)|TF(Bytes)?)|External|Float)|gisterFont|move(Node|Child(At)?|EventListener)))|g(c|otoAnd(Stop|Play)|e(nerateFilterRect|t(Re(ct|mote)|Microphone|Bounds|S(t(yle|ackTrace)|elected(Text)?)|NamespaceForPrefix|C(h(ild(ByName|Index|At)|ar(Boundaries|IndexAtPoint))|olorBoundsRect|amera)|Text(RunInfo|Format)?|ImageReference|ObjectsUnderPoint|Definition|P(ixel(s|32)?|aragraphLength|refixForNamespace)|FirstCharInParagraph|L(ine(Metrics|Text|Index(OfChar|AtPoint)|Offset|Length)|o(cal|aderInfoByDefinition))))|lobalToLocal)|F(ile(Reference(List)?|Filter)|ocusEvent|ullScreenEvent)|m(oveTo|erge)|b(egin(GradientFill|BitmapFill|Fill)|rowse)|Lo(calConnection|ader(Context)?)|A(syncErrorEvent|c(cessibilityProperties|tivityEvent)|pplicationDomain))\\b(\\s)?',
          name: 'support.function.flash.actionscript.3'
        },
        {
          match:
            '\\b(s(h(iftKey|o(wDefaultContextMenu|rtcut)|a(dow(Color|Alpha)|r(pness|edEvents)))|c(enes|ale(X|Mode|Y|9Grid)|r(oll(Rect|H|V)|een(Resolution(X|Y)|Color|DPI)))|t(yle(Sheet|Names)|a(tus|ge(X|Height|Y|FocusRect|Width)?)|rength)|i(ze|len(ce(Timeout|Level)|t))|o(ngName|undTransform)|e(curityDomain|paratorBefore|lect(ion(BeginIndex|EndIndex)|able)|rverString)|wfVersion|a(ndboxType|ve|meDomain)|moothing)|h(tmlText|i(t(TestState|Area)|deObject|ghlight(Color|Alpha))|eight|as(MP3|S(creen(Broadcast|Playback)|treaming(Video|Audio))|TLS|IME|Printing|EmbeddedVideo|VideoEncoder|A(ccessibility|udio(Encoder)?)))|y(ear)?|n(o(de(Name|Type|Value)|AutoLabeling)|um(Children|Frames|L(ines|ock))|extSibling|ame(s(paceURI)?)?)|c(h(ild(Nodes|AllowsParent)|eckPolicyFile|a(ngeList|rCo(de|unt)))|trlKey|o(n(structor|nected(ProxyType)?|catenated(Matrix|ColorTransform)|te(nt(Type|LoaderInfo)?|xtMenu(Owner)?)|denseWhite|versionMode)|de|lor(s|Transform)?|m(ponent(X|Y)|ment))|u(stomItems|rrent(Scene|Count|Target|Domain|F(PS|rame)|Label(s)?))|l(ient|amp)|a(ncelable|cheAsBitmap|p(sLock|tion)|retIndex)|reat(ionDate|or))?|t(hickness|y(pe)?|ime|o(tal(Memory|Frames)|p(Left)?)|ext(Snapshot|Height|Color|Width)?|a(rget|b(Stops|Children|Index|Enabled))|ra(ns(parent|form)|ck(AsMenu)?)|x)|i(s(Buffering|Debugger)|n(sideCutoff|ner|de(nt|x)|fo)|talic|d(Map|3)|gnoreWhite|me)|zoom|o(s|utsideCutoff|paqueBackground|verState|rientation|bject(ID|Encoding))|d(ynamicPropertyWriter|i(s(tance|play(Mode|State|AsPassword))|visor)|o(cTypeDecl|ubleClickEnabled|wnState|main)|e(sc(ent|ription)|fault(TextFormat|ObjectEncoding)|l(ta|ay)|blocking)|ata(Format)?|ropTarget)?|u(s(ingTLS|e(RichTextClipboard|HandCursor|CodePage|EchoSuppression))|nderline|pState|r(i|l))|p(ixel(Bounds|Snapping|AspectRatio)|osition|lay(erType)?|a(n|per(Height|Width)|r(ent(Node|Domain|AllowsChild)?|ameters)|ge(Height|Width))|r(int(AsBitmap)?|o(totype|xyType)|e(serveAlpha|viousSibling|fix)))|e(n(dian|abled)|ventPhase|rror(ID)?|x(tension|actSettings)|mbedFonts)|v(i(sible|deo(Height|Width))|olume|ersion|alue)|k(nockout|e(y(Code|FrameInterval|Location)|rning))|quality|f(i(l(ters|eList)|rstChild)|o(nt(S(tyle|ize)|Name|Type)?|cus(Rect)?|r(ceSimple|wardAndBack))|ullScreen(SourceRect|Height|Width)?|ps|rame(sLoaded|Rate)?)|w(idth|ordWrap)|l(iveDelay|o(cal(X|Y|Name|FileReadDisable)|op(back)?|ader(Info|URL)?)|e(ngth|tterSpacing|vel|ft(Margin|To(Right|Left)|Peak)?|ading)|a(stChild|nguage|bels))|a(scent|n(tiAliasType|gle)|c(cessibilityProperties|ti(onScriptVersion|v(ityLevel|e|ating)))|ttributes|utoSize|pplicationDomain|v(HardwareDisable|ailable)|l(tKey|ign|pha(s|Multiplier|Offset)?|waysShowSelection|bum)|rtist)?|r(ight(Margin|To(Right|Left)|Peak)?|o(tation|ot)|unning|e(strict|ct|d(Multiplier|Offset)|peatCount|questHeaders|wind|latedObject)|at(ios|e))|g(enre|ain|r(idFitType|een(Multiplier|Offset)|aphics))|x(mlDecl)?|m(o(tion(Timeout|Level)|d(ificationDate|e)|use(X|Y|Children|Target|Enabled|WheelEnabled))|u(ted|ltiline)|e(ssage|thod)|a(sk|nufacturer|cType|trix(X|Y)?|p(Bitmap|Point)|rshallExceptions|x(Scroll(H|V)|Chars|Level)))|b(ytes(Total|Loaded|Available)?|i(tmapData|as)|o(ttom(Right|ScrollV)?|ld|rder(Color)?)|u(tton(Mode|Down)|iltInItems|ffer(Time|Length)|llet|bbles)|l(ockIndent|u(e(Multiplier|Offset)|r(X|Y))|endMode)|a(ndwidth|ckground(Color)?))?)\\b',
          name: 'support.property.flash.actionscript.3'
        }
      ]
    },
    'framework-mx': {
      patterns: [
        {
          match:
            '\\b(R(SL_(COMPLETE|PROGRESS|ERROR)|IGHT(_(MOUSE_(DOWN|UP)|CLICK))?|O(W_AXIS|LL(_O(UT|VER)|OVER))|E(MO(TE_CREDENTIALS_(HEADER|CHARSET_HEADER)|VE(_SUBSCRIPTIONS|D(_FROM_STAGE)?)?)|S(IZ(ING|E)|ULT(_FORMAT_(XML|TEXT|OBJECT|E4X|FLASHVARS|ARRAY))?|ET)|NDER|CORD|TRYABLE_HINT_HEADER|P(EAT(_(START|END))?|LA(Y|CE))|QU(IRED_(MIN_(MAX|INTERVAL)|BOUNDED_VALUES|PADDING)|EST_TIMEOUT_HEADER)|FRESH|WIND(ING)?|ADY)|ADI(US_AXIS|AL_AXIS))|GET_METHOD|M(IDDLE_(MOUSE_(DOWN|UP)|CLICK)|O(USE_(MOVE|O(UT|VER)|DOWN(_OUTSIDE)?|UP|WHEEL(_OUTSIDE)?|LEAVE)|V(ING|E))|ULTI(_S(UBSCRIBE_OPERATION|ELECT)|PLE(_(ROWS|CELLS))?)|E(SSAG(ING_VERSION|E(_DELIVERY_IN_DOUBT)?)|NU_(SHOW|HIDE)|TADATA_RECEIVED|DIUM)|A(X_BITMAP_DIMENSION|STER_CARD|NUAL|TCH_(HEIGHT|WIDTH)))|B(ROWSER_URL_CHANGE|YTES|INDING|OTTOM|U(TTON_DOWN|FFERING)|EGIN_RECORD)|S(HOW(_ALL|ING_DATA)?|CROLL|T(OPPED|ATE_CHANGE)|INGLE(_(ROW|CELL))?|O(RT|CKET_DATA|UND_COMPLETE|AP_ACTION_HEADER)|UB(SCRI(BE_OPERATION|PTION_INVALIDATE_OPERATION)|TOPIC_(SEPARATOR|HEADER))|E(RVER_(NAME_TOKEN|PORT_TOKEN)|TUP|EKING|LECT(_INDEX|OR_HEADER|ED)?)|LICER_AXIS)|H(TML_(RENDER|BOUNDS_CHANGE|DOM_INITIALIZE)|I(GH|D(ING_DATA|E))|ORIZONTAL(_AXIS)?|EAD(_METHOD|ER(_(RELEASE|SHIFT|TEXT_PART|ICON_PART|DR(OP_OUTSIDE|AG_OUTSIDE)))?))|YES|N(O(N(MODAL|E)|_(BITRATE_MATCH|C(ONNECTION|U(RSOR|E_POINT_MATCH))|OP_POLL_HEADER)|T_A_COLOR)?|E(XT_(MONTH|YEAR)|TWORK_CHANGE|EDS_CONFIG_HEADER|W_(ROW|COLUMN)|AREST))|C(RE(DENTIALS_CHARSET_HEADER|ATION_COMPLETE)|H(ILD_(REMOVE|INDEX_CHANGE|ADD)|A(R(SET_UTF_8|T_(CLICK|DOUBLE_CLICK))|NGE))|O(MP(UTER|LETE)|N(NECT(ION_ERROR)?|TE(XT_MENU|NT_TYPE_(XML|SOAP_XML|FORM)))|PY|L(UMN_(STRETCH|AXIS)|LECTION_CHANGE))|U(R(RENT_(STATE_CHANG(ING|E)|VERSION)|SOR_(MANAGEMENT|UPDATE))|BE_(COMPLETE|PROGRESS)|E_POINT)|ENTER|L(I(CK|ENT_(SYNC_OPERATION|PING_OPERATION))|OS(ING|E)|USTER_REQUEST_OPERATION)|ANCEL(LED)?)|T(RA(NSFORM_CHANGE|C(E_(METHOD|LEVEL_(1|2|3))|K))|H(ICKNESS|UMB(_(RELEASE|TRACK|DRAG|P(RESS|OSITION)))?)|YPE_ID|O(OL_TIP_(S(HOW(N)?|TART)|HIDE|CREATE|END)|P)|EXT_SELECTION_CHANGE|WEEN_(START|UPDATE|END)|AB_(CHILDREN_CHANGE|INDEX_CHANGE|ENABLED_CHANGE))|I(N(IT(_(COMPLETE|PROGRESS)|IALIZE)?|V(OKE|ALID(_(XML|SEEK|CONTENT_PATH))?)|FO)|TEM_(ROLL_O(UT|VER)|MOUSE_(MOVE|O(UT|VER)|DOWN|UP)|CL(ICK|OSE)|OPEN(ING)?|DOUBLE_CLICK|EDIT_(BEGIN(NING)?|END)|FOCUS_(IN|OUT))|D(3|LE)|LLEGAL_(RUNTIME_ID|CUE_POINT|OPERATION))|O(BJECT_NOT_(UNIQUE|VISIBLE|FOUND)|N|THER|P(TIONS_METHOD|EN)|VERLAY_CREATED|K|FF|LAP_(MEMBER|HIERARCHY|DIMENSION|LEVEL))|D(RAG_(START|COMPLETE|OVER|DROP|E(XIT|NTER))|I(RECTOR(Y_(C(HANG(ING|E)|LOSING)|OPENING)|IES_(ONLY|FIRST))|S(CO(NNECT(_(CODE|OPERATION)|ED)?|VER)|PLAYING|ABLED)|NERS_CLUB|VIDER_(RELEASE|DRAG|PRESS))|O(UBLE_CLICK|WN)|E(BUG|S(TINATION_CLIENT_ID_HEADER|ELECT)|FAULT(_(M(EASURED_(MIN_(HEIGHT|WIDTH)|HEIGHT|WIDTH)|AX_(HEIGHT|WIDTH))|HANDLER|DESTINATION_HTTP(S)?))?|LETE(_(METHOD|DEFAULT_PLAYER))?|ACTIVATE)|ATA_CHANGE)|U(RL_CHANGE(D)?|S(_O(R_CANADA|NLY)|ER_(IDLE|PRESENT))|N(SUBSCRIBE_OPERATION|KNOWN_OPERATION|LOAD)|P(DATE(_COMPLETE)?)?)|P(R(O(GRESS|P(OSEDSORT|ERTY_CHANGE))|E(SERVE_DURABLE_HEADER|INITIALIZE|PARING_TO_(SHOW_DATA|HIDE_DATA)|VIOUS_(MONTH|YEAR)))|O(ST_METHOD|PUP|LL(_(OPERATION|WAIT_HEADER)|ED))|UT_METHOD|LAY(HEAD_UPDATE|ING)|A(RENT|GE_(RIGHT|DOWN|UP|LEFT)|USED))|E(RROR(_(HINT_HEADER|DECODING|URL_REQUIRED|ENCODING))?|X(IT(_STATE|ING)|EC_QUEUED_CMD)|MPTY|N(TER(_(STATE|FRAME))?|D(_RECORD|POINT_HEADER))|VENT|FFECT(_(START|END))?)|V(ISA|ER(SION_(2_0(_1)?|3_0|ALREADY_(READ|SET))|TICAL(_AXIS)?)|AL(ID|UE_COMMIT))|KILOBYTES|QUE(RY_PROGRESS|UED)|F(I(RST_INDEX_MODE|L(E(S_(ONLY|FIRST|AND_DIRECTORIES)|_CHOOSE)|L_PAGE))|OCUSED(SELECTED)?|ULLSCREEN|LEX_CLIENT_ID_HEADER|A(TAL|ULT))|W(INDOW_(RESIZE|MOVE|COMPLETE|DEACTIVATE|ACTIVATE)|ARN)|L(IN(E_(RIGHT|DOWN|UP|LEFT)|K)|O(G(IN_OPERATION|OUT_OPERATION)?|CATION_CHANGE|W|AD(ING)?)|EFT|AST(_INDEX_MODE)?)|A(MERICAN_EXPRESS|BSOLUTE|N(GULAR_AXIS|Y(_INDEX_MODE)?)|C(T(I(ON_SCRIPT|VATE)|UALSORT)|KNOWLEDGE)|T_(RIGHT|BOTTOM|TOP|LEFT)|DD(_SUBSCRIPTIONS|ED(_TO_STAGE)?)?|UT(HENTICATION_MESSAGE_REF_TYPE|O)|PPLICATION(_(COMPLETE|DEACTIVATE|URL_CHANGE|ACTIVATE))?|LL))\\b',
          name: 'support.constant.mx.actionscript.3'
        },
        {
          match:
            '\\b(s(how(Cursor|InHierarchy|DropFeedback|F(ocus|eedback))?|crollToIndex|t(yle(sInitialized|Changed)|op(ImmediatePropagation|Drag|Propagation)?|a(ck(All)?|tus|rt(Drag|Effect)?)|ring(Compare|To(Object|Date)))|impleType|ort|u(spend(BackgroundProcessing|EventHandling)|bs(cribe|titute))|e(nd|t(RemoteCredentials|BusyCursor|S(crollProperties|tyle(Declaration)?|ize|e(condAxis|lection))|Handler|C(hildIndex|o(n(straintValue|textMenu)|lor)|u(ePoints|r(sor|rentState))|redentials)|T(humbValueAt|itle|oggled|extFormat|weenHandlers)|Item(Icon|At)|Pro(pertyIsEnumerable|gress)|E(nabled|mpty)|Visible|F(ocus|ragment)|A(ctual(Size|Height|Width)|xis))|ek)|wapChildren(At)?|ave(State)?)|h(i(story(Go|Back|Forward)|tTest(Object|Point)|de(Cursor|D(ata|ropFeedback)|Focus)?|erarchize)|orizontalGradientMatrix|elp(ResolveIDPart|CreateIDPart)|as(R(owData|esponder)|Glyphs|Metadata|Children|IllegalCharacters|OwnProperty|UnresolvableTokens|PendingRequestForMessage|EventListener|F(ormat|ailover)))|R(SLEvent|o(tate(Instance)?|undedRectangle)|e(s(ize(Instance|Event)?|ource(Manager(Impl)?|Bundle|Event)|ultEvent|ponder)|nderData|ctangular(Border|DropShadow)|peater(AutomationImpl)?|gExpValidat(ionResult|or)|mo(t(ingMessage|eObject)|ve(Child(Action(Instance)?)?|ItemAction(Instance)?)))|adi(oButton(Group|Icon|AutomationImpl)?|alGradient))|G(low(Instance)?|r(id(Row|Item|Lines)?|ouping(Collection|Field)?|adient(Base|Entry)))|n(o(tifyStyleChangeInChildren|rmalizeURL)|umericCompare|e(wInstance|xt(Scene|Page|Frame))|avigate(Back|To|Down|Up|Forward))|c(h(ild(ren)?|eckChannelConsistency|a(nnel(ConnectHandler|DisconnectHandler|FaultHandler)|rtStateChanged))|o(n(nect|cat|t(entTo(Global|Local)|ains(Rect|Point)?))|py|ll(ectTransitions|apseAll)|mp(ute(Begin|Object(Begin|End|Loop)|Digest|End|Loop)|are|ress))|urveTo|enterPopUp|l(o(se(S(treamingConnection|ubdirectory)|Node)?|ne)|ear(Result|S(tyle(Declaration)?|election)|Headers)?|aimStyles)|a(n(cel(Refresh|Query|Load)?|HaveChildren|Watch|LoadWSDL)|pture(MoreStartValues|BitmapData|StartValues|Image|EndValues)|l(culateDropIndex|lLater))|r(ossJoin|eate(R(ootWindow|eferenceOnParentDocument)|XMLDocument|Menu|Selector|C(o(lumnItemRenderer|mponent(sFromDescriptors|FromDescriptor))|u(rsor|be))|ToolTip|I(nstance(s)?|tem(Renderer|Editor)|D(Part)?)|U(niqueName|ID|pdateEvent)|PopUp|E(vent(FromMessageFault)?|rrorMessage)|AutomationIDPart)?))|XMLListCollection|M(iniDebugTarget|o(dule(Event|Loader)?|v(ieClip(LoaderAsset|Asset)|e(Instance|Event)?))|ultiTopic(Consumer|Producer)|e(ssag(ingError|e(Responder|SerializationError|PerformanceUtils|Event|FaultEvent|A(ckEvent|gent)))|nu(Bar(BackgroundSkin|Item(AutomationImpl)?|AutomationImpl)?|ShowEvent|ItemRenderer(AutomationImpl)?|Event|ListData|AutomationImpl)?|tadataEvent)|askEffect(Instance)?)|B(yteArrayAsset|itmap(Fill|Asset)|o(undedValue|rder|x(ItemRenderer|Divider|AutomationImpl)?)|u(tton(Bar(ButtonSkin|AutomationImpl)?|Skin|A(sset|utomationImpl))?|bble(Series(RenderData|Item|AutomationImpl)?|Chart))|lur(Instance)?|a(se(ListData|64(Decoder|Encoder))|r(Se(t|ries(RenderData|Item|AutomationImpl)?)|Chart))|ro(kenImageBorderSkin|wserChangeEvent))|t(o(XMLString|ByteArray|String|Array)|ext|r(im(ArrayElements)?|uncateToFit|a(nsformCache|ceMsg)))|i(s(Branch|S(ynchronized|i(zeInvalidatingStyle|mple))|Http(sURL|URL)|ColorName|To(pLevel(Window)?|ggled)|I(n(heriting(Style|TextFormatStyle)|valid|fo)|tem(Select(ed|able)|Highlighted|Open|Editable|Visible))|D(e(faultPrevented|bug)|ragEventPositionBased)|UID|P(arent(SizeInvalidatingStyle|DisplayListInvalidatingStyle)|rototypeOf)|E(nabled|rror|mpty)|V(isible|alidStyleValue)|F(ontFaceEmbedded|atal)|W(hitespace|a(tching|rn))|LicensePresent|AutomationComposite)|n(s(tallCompiledResourceBundles|ert)|crement(RecordedLinesCount|CacheCounter)|ter(sect(s|ion)|polate)|it(ialize(Repeater(Arrays)?|d)?|ProtoChain|Effect|ForHistoryManager)?|d(icesToIndex|exToItemRenderer)|v(oke|ertTransform|alidate(S(tacking|ize|eriesStyles)|DisplayList|Properties|List))|f(o|late(Point)?))|tem(Renderer(Contains|ToIndex)|To(I(con|temRenderer)|Data(Tip)?|Label)|Updated))|S(hadow(BoxItemRenderer|LineRenderer)|ystemManager|croll(Bar(AutomationImpl)?|ControlBase(AutomationImpl)?|T(humb(Skin)?|rackSkin)|Event|ArrowSkin)|t(yle(Proxy|Event)|a(ckedSeries|t(usBar(BackgroundSkin)?|e(ChangeEvent)?))|r(ingValidator|oke|eaming(HTTPChannel|ConnectionHandler|AMFChannel)))|impleXMLEncoder|o(cialSecurityValidator|und(Effect(Instance)?|Asset)|lidColor|rt(Info|Error|Field)?)|u(mmary(Row|Object|Field)|bscriptionInfo)|p(acer|riteAsset)|e(cure(Streaming(HTTPChannel|AMFChannel)|HTTPChannel|AMFChannel)|t(Style(Action(Instance)?)?|Property(Action(Instance)?)?|EventHandler)|quence(Instance)?|ries(Slide(Instance)?|Interpolate(Instance)?|Zoom(Instance)?|Effect(Instance)?|AutomationImpl)?)|OAP(Message|Header|Fault)|w(itchSymbolFormatter|atch(Skin|PanelSkin))|lider(HighlightSkin|T(humb(Skin)?|rackSkin)|DataTip|Event|Label|AutomationImpl)?|WFLoader(AutomationImpl)?)|H(Rule|Box|i(tData|erarchical(CollectionView(Cursor)?|Data))|S(crollBar|lider)|orizontalList|T(ML|TP(RequestMessage|Service|Channel))|eaderEvent|DividedBox|alo(Border|FocusRect)|LOC(Series(RenderData|Base(AutomationImpl)?|Item)?|Chart|ItemRenderer))|o(nTween(Update|End)|pen(S(treamingConnection|ubdirectory)|Node)?|ffset(Point)?|wns|rder(To(Back|Front)|In(BackOf|FrontOf))|bjectToString)|d(is(connect(All)?|p(lay(ObjectToString)?|atchEvent)|able(Polling|AutoUpdate))|oDrag|e(s(c(endants|ribe(RendererForItem|Type|Data))|troy(ToolTip|ItemEditor))|c(ode(Response|XML)?|rement(RecordedLinesCount|CacheCounter))|termineTextFormatFromStyles|lete(ReferenceOnParentDocument|Instance)|activate|bug)|at(e(Compare|ToString)|a(Changed|ToLocal|ForFormat))|raw(R(ound(Rect(Complex)?|edRect)|ect)|Shadow|Circle|Ellipse|Focus))|N(oChannelAvailableError|um(eric(Stepper(DownSkin|UpSkin|Event|AutomationImpl)?|Axis)|ber(Base|Validator|Formatter))|etConnectionChannel|avBarAutomationImpl)|C(h(ild(ItemPendingError|ExistenceChangedEvent)|eckBox(Icon|AutomationImpl)?|a(n(nel(Set|E(vent|rror)|FaultEvent)?|geWatcher)|rt(Base(AutomationImpl)?|SelectionChangeEvent|Item(DragProxy|Event)?|E(vent|lement)|Label)))|ircleItemRenderer|SSStyleDeclaration|o(n(s(traint(Row|Column)|umer)|t(extualClassFactory|ainer(MovieClip(AutomationImpl)?|AutomationImpl)?|rolBar)|figMap)|l(orPicker(Skin|Event|AutomationImpl)?|umn(Se(t|ries(RenderData|Item|AutomationImpl)?)|Chart)|lection(Event|ViewError))|m(po(siteEffect(Instance)?|nentDescriptor)|mandMessage|boB(ox(A(utomationImpl|rrowSkin))?|ase(AutomationImpl)?)))|u(ePoint(Manager|Event)|r(sor(Bookmark|Error)|rency(Validator|Formatter))|beEvent)|l(oseEvent|assFactory)|a(n(dlestick(Series|Chart|ItemRenderer)|vas(AutomationImpl)?)|tegoryAxis|lendarLayoutChangeEvent|rtesian(C(hart(AutomationImpl)?|anvasValue)|Transform|DataCanvas))|r(oss(ItemRenderer|DomainRSLItem)|editCardValidator))|u(n(s(ubscribe|etContextMenu)|co(nstrainRenderer|mpress)|ion|watch|load(ResourceModule|Module|StyleDeclarations)?|register(C(ollectionClass|lass)|DataTransform)?)|pdate(DataChild|A(fterEvent|llDataTips))?|risEqual)|T(i(tle(Ba(ckground|r)|Window)|le(Base(AutomationImpl)?|List(ItemRenderer(AutomationImpl)?)?)?)|o(olTip(Border|Event|AutomationImpl)?|ggleButtonBar(AutomationImpl)?)|ext(Range|SelectionEvent|Input(AutomationImpl)?|FieldA(sset|utomationHelper)|Area(AutomationImpl)?)?|ween(E(vent|ffect(Instance)?))?|ab(Bar|Skin|Navigator(AutomationImpl)?)|r(iangleItemRenderer|ee(ItemRenderer(AutomationImpl)?|Event|ListData|AutomationImpl)?|a(nsition|ceTarget)))|I(n(stanceCache|dexChangedEvent|v(okeEvent|alid(C(hannelError|ategoryError)|DestinationError|FilterError)))|tem(Responder|ClickEvent|PendingError)|ris(Instance)?|mage(Snapshot)?)|p(ixelsToPercent|o(pUpMenu|ll)|ublish|eek(First|Last)|lay|a(use|r(se(NumberString)?|entChanged))|r(operty(ChangeHandler|IsEnumerable|AffectsSort)|e(ttyPrint|pareToPrint|v(iousPage|Scene|entDefault|Frame)|ferDropLabels)))|e(n(code(Request|Byte(s|Array)|ImageAsBase64|Date|UTFBytes|Value)?|d(Recording|Tween|Interpolation|Effects(Started|ForTarget)|Fill)?|umerateFonts|able(Polling|AutoUpdate))|quals|ffect(Started|Finished)|lements|ase(None|In(Out)?|Out)|rror|x(it|pand(ChildrenOf|Item|All)|ecute(Bindings|ChildBindings)?))|Z(ipCode(Validator|Formatter)|oom(Instance)?)|O(peration|bjectProxy|LAP(Me(asure|mber)|Set|Hierarchy|C(ube|ell)|Tuple|D(imension|ataGrid(GroupRenderer(AutomationImpl)?|AutomationImpl)?)|Element|QueryAxis|Level|A(ttribute|xisPosition)))|D(ynamicEvent|i(ssolve(Instance)?|vide(dBox(AutomationImpl)?|rEvent)|amondItemRenderer)|ownloadProgressBar|ualStyleObject|ef(erredInstanceFrom(Class|Function)|aultDataDescriptor)|at(e(Chooser(MonthArrowSkin|YearArrowSkin|Indicator|Event|AutomationImpl)?|TimeAxis|Validator|F(ield(AutomationImpl)?|ormatter))|a(Grid(Base|SortArrow|Header(Ba(se|ckgroundSkin)|Separator)?|Column(ResizeSkin|DropIndicator)?|ItemRenderer(AutomationImpl)?|DragProxy|Event|L(istData|ockedRowContentHolder)|AutomationImpl)?|T(ip|ransform)|Description))|r(opdownEvent|ag(ManagerAutomationImpl|Source|Event)))|v(erticalGradientMatrix|al(idat(ionResultHandler|e(S(tring|ize|ocialSecurity)|N(ow|umber)|C(urrency|lient|reditCard)|ZipCode|D(isplayList|ate)|P(honeNumber|roperties)|Email|All)?)|ueOf))|U(nconstrainItemAction(Instance)?|I(MovieClip(AutomationImpl)?|Component(Descriptor|AutomationImpl)?|TextF(ield(AutomationImpl)?|ormat)))|JPEGEncoder|qname(sEqual|ToString)|f(i(n(ish(Repeat|Print|Effect)|d(ResourceBundleWithResource|Member|String|Hierarchy|ChildMember|I(ndex|tem)|D(imension|ataPoints)|F(irst|ocusManagerComponent)|L(evel|ast)|A(ny|ttribute)))|lter(Cache|Instance))|ormat(Rounding(WithPrecision)?|Negative|T(housands|oString)|Decimal|Precision|Value|ForScreen)?|lush|a(tal|ult)|romByteArray)|P(hone(NumberValidator|Formatter)|ie(Series(RenderData|Item|AutomationImpl)?|Chart)|o(pUp(Menu(Button|Icon)|Button(Skin|AutomationImpl)?|Icon)|l(lingChannel|ar(Chart|Transform|DataCanvas)))|NGEncoder|lot(Series(RenderData|Item|AutomationImpl)?|Chart)|a(nel(Skin|AutomationImpl)?|use(Instance)?|rallel(Instance)?)|r(int(OLAPDataGrid|DataGrid|AdvancedDataGrid)|o(ducer|pertyChange(s|Event)|gr(ess(MaskSkin|Bar(Skin|AutomationImpl)?|TrackSkin|IndeterminateSkin)|ammaticSkin))|eloader))|E(dgeMetrics|ffect(TargetFilter|Instance|Event)?|rrorMessage|mailValidator)|w(illTrigger|a(tch|rn)|rite(MultiByte|B(yte(s)?|oolean)|Short|Int|Object|Double|U(nsignedInt|TF(Bytes)?)|External|Float))|l(ine(Style|To)|o(calTo(Global|Content|Data)|ad(ResourceModule|Module|St(yleDeclarations|ate|ring)|Failover|WSDL)?|g(in|out|Event)?)|egendDataChanged|ayoutBackgroundImage)|a(ssignFocus|c(ceptDragDrop|tivate|knowledge)|tt(achCamera|ribute(s)?)|d(d(Res(ource(Bundle)?|ponder)|Member(s)?|S(ynchronization|impleHeader|ub(scription|topic)|et)|H(eader|a(ndler|loColors))|C(h(ild(Set|At)?|annel)|uePoint)|T(oCreationQueue|uple|arget)|Item(At)?|Object|Data(Child|EffectItem)?|Po(sition|pUp)|E(ventListener|lement(s)?)|F(irst|ocusManager)|L(ogger|ast))|just(Gutters|Brightness(2)?))|pp(endText|ly(Settings)?)|reInaccessibleObjectsUnderPoint)|V(Rule|Box|i(deo(Display(AutomationImpl)?|E(vent|rror))|ewStack(AutomationImpl)?)|S(crollBar|lider)|DividedBox|alidat(ionResult(Event)?|or))|r(e(s(tore|olve(ID(ToSingleObject|Part(ToSingleObject)?)?|AutomationIDPart)|u(lt|me(BackgroundProcessing|EventHandling)?)|et)|c(ord(AutomatableEvent)?|eive)|duceLabels|pla(y(MouseEvent|Click(OffStage)?|Key(DownKeyUp|boardEvent)|AutomatableEvent)?|ce(SelectedText|T(okens|ext)|P(ort|rotocol)))|verse|fresh|l(oad|ease)|ad(MultiByte|B(yte(s)?|oolean)|Short|Int|Object|Double|U(nsigned(Byte|Short|Int)|TF(Bytes)?)|External|Float)|g(ister(SizeInvalidatingStyle|C(ol(orName|lectionClass)|lass|acheHandler)|InheritingStyle|D(elegateClass|ataTransform)|Parent(SizeInvalidatingStyle|DisplayListInvalidatingStyle)|Effects|Font|Application)?|enerateStyleCache)|move(ResourceBundle(sForLocale)?|BusyCursor|Sub(scription|topic)|Header|C(h(ild(At)?|annel)|u(ePoint|rsor))|Target|ItemAt|DataEffectItem|Po(sition|pUp)|EventListener|F(irst|ocusManager)|L(ogger|ast)|All(C(hildren|u(ePoints|rsors)))?)?)|gbMultiply)|g(otoAnd(Stop|Play)|et(R(oot|e(source(s(For(Namespace|URI))?|Bundle)|nder(erSemanticValue|DataForTransition)|ct(angle)?|peaterItem)|adioButtonAt)|GroupName|M(o(dule|use(X|Y))|enuAt)|B(o(olean|unds)|undleNamesForLocale)|S(t(yle(Declaration)?|ackTrace|ring(Array)?)|e(condAxis|rverName(WithPort)?)|OAPAction|WFRoot)|H(i(storyAt|erarchicalCollectionAdaptor)|eader(At)?)|N(odeDepth|umber|ext(Item|FocusManagerComponent))|C(h(ild(ByName|Index|ren(FromIDPart)?|At)|a(nnel(Set)?|r(Boundaries|IndexAtPoint)))|o(nstraintValue|l(orName(s)?|lectionClass))|u(ePoint(s|ByName)|rrent|be)|ell|lass(StyleDeclarations|Info)?|acheKey)|T(humbAt|ype|ext(Styles|Format)|ab(ularData|At))|I(n(stance|t)|tem(sInRegion|RendererFactory|Index|At)|mageReference)|O(peration(AsString)?|bject(sUnderPoint)?)|D(ividerAt|e(scriptorFor(MethodByName|Event(ByName)?)|finitionByName)|ata)|U(int|I(TextFormat|D))|P(ort|ar(ent(Item)?|agraphLength)|r(o(tocol|pert(yDescriptors|ies))|eviousItem))|E(vents|lement(Bounds|FromPoint)|xplicitOrMeasured(Height|Width))|V(iewIndex|alue(s)?)|F(i(eldSortInfo|rst(CharInParagraph|Item))|ocus|ullURL|eedback)|Window|L(ine(Metrics|Text|Index(OfChar|AtPoint)|Offset|Length)|o(cal(Name|es|Point)|gger)|evelString|a(stItem|bel(s|Estimate)))|A(ssociatedFactory|ttributeByQName|utomation(Name|C(hildAt|omposite|lass(By(Name|Instance)|Name))|ValueForData)|ffectedProperties|llDataPoints|rgDescriptors|xis))|lobalTo(Content|Local))|QualifiedResourceManager|F(ile(System(HistoryButton|ComboBox|Tree|DataGrid|List)|Event)|o(ntAsset|cusManager|rm(Heading|Item(Label|AutomationImpl)?|atter|AutomationImpl)?)|lex(Mo(useEvent|vieClip)|Bitmap|S(hape|impleButton|prite)|HTMLLoader|Native(Menu(Event)?|WindowBoundsEvent)|ContentHolder(AutomationImpl)?|TextField|PrintJob|Event)|a(de(Instance)?|ult(Event)?))|xmlNotification|m(inimize|o(useEventToHeaderPart|ve(Next|To(FirstPage)?|Divider|Previous|FocusToHeader)?)|easure(H(TMLText|eightOfItems)|Text|WidthOfItems)|a(p(Cache|pingChanged)|ximize))|b(ind(Setter|Property)|egin(Recording|BitmapFill|Interpolation|Fill)?|ringToFront)|W(i(ndow(RestoreButtonSkin|M(inimizeButtonSkin|aximizeButtonSkin)|Background|CloseButtonSkin|ed(SystemManager|Application))?|pe(Right(Instance)?|Down(Instance)?|Up(Instance)?|Left(Instance)?))|SDLBinding|e(dgeItemRenderer|bService))|L(i(st(RowInfo|Base(Se(ekPending|lectionData)|ContentHolder(AutomationImpl)?|AutomationImpl)?|CollectionView|Item(Renderer(AutomationImpl)?|SelectEvent|DragProxy)|D(ata|ropIndicator)|Event|AutomationImpl)?|n(e(Renderer|Series(RenderData|Segment|Item|AutomationImpl)?|Chart|ar(Gradient(Stroke)?|Axis)|FormattedTarget)|k(B(utton(Skin)?|ar(AutomationImpl)?)|Separator)))|o(cale|ad(erConfig|Event)|g(Event|Logger|Axis))|egend(MouseEvent|Item(AutomationImpl)?|Data|AutomationImpl)?|a(yout(Manager|Container)|bel(AutomationImpl)?))|A(sync(Re(sponder|quest)|Message|Token)|nimateProperty(Instance)?|c(cordion(Header(Skin)?|AutomationImpl)?|ti(onEffectInstance|vatorSkin)|knowledgeMessage)|MFChannel|d(d(Child(Action(Instance)?)?|ItemAction(Instance)?)|vanced(DataGrid(Renderer(Description|Provider)|GroupItemRenderer(AutomationImpl)?|Base(SelectionData|Ex(AutomationImpl)?)?|SortItemRenderer|Header(Renderer|ShiftEvent|HorizontalSeparator|Info)|Column(Group)?|Item(Renderer(AutomationImpl)?|SelectEvent)|DragProxy|Event|ListData|AutomationImpl)?|ListBase(AutomationImpl)?))|utomation(Re(cordEvent|playEvent)|ID|DragEvent(WithPositionInfo)?|E(vent|rror))|IREvent|pplication(ControlBar|TitleBarBackgroundSkin|AutomationImpl)?|lert(FormAutomationImpl|AutomationImpl)?|r(ea(Renderer|Se(t|ries(RenderData|Item|AutomationImpl)?)|Chart)|rayCollection)|xis(Renderer(AutomationImpl)?|Base|Label(Set)?)|bstract(Message|Service|Consumer|Target|Operation|WebService)))\\b(\\s)?',
          name: 'support.function.mx.actionscript.3'
        },
        {
          match:
            '\\b(s(h(iftKey|ow(Root|Gripper|BusyCursor|S(crollTips|tatusBar)|H(id(den|eFromKeys)|eaders)|C(ontrolBar|loseButton)|T(itleBar|o(olTips|day)|extField|arget)|I(nAutomationHierarchy|cons)|D(elay|ataTip(s)?)|E(ffect|xtensions)|FocusIndicator|LabelVertically|AllDataTips)|arpness|rinkDuration)|ystem(Manager|Chrome|TrayIconMenu)|napInterval|c(enes|ale(X(To|From)?|Mode|Y(To|From)?|Content|9Grid|EasingFunction)|r(ipt(RecursionLimit|TimeLimit)|oll(Rect|H|TipFunction|Position|V)|ubDelay|een))|t(yle(sFactory|Sheet|Name|Declaration|Function)?|ickyHighlighting|epSize|a(ck(Totals|er)|t(us(Bar(Factory)?|TextField)?|e(s|Responsive)?)|rt(ingIndex|Time|Delay|Angle)?|ge(X|Height|Y|Width)?)|rength)|ize(Column|ToPage|DisplayMode)?|o(u(nd(Channel|Transform)?|rce)|rt(CompareFunction|ItemRenderer|OnXField|Descending|ExpertMode|able(Columns)?)?)|u(spendBackgroundProcessing|cceeded|perClassName|mmar(y(ObjectFunction|Placement|Function)|ies)|b(scri(ptions|bed)|topic(s)?|Field))|preadMethod|e(cond(RadiusAxis|Series|HorizontalAxis(Renderer)?|DataProvider|VerticalAxis(Renderer)?)|t(s|up)|parationError|quenceNumber|lect(ion(Mode|BeginIndex|Info|EndIndex|Layer)?|or(s)?|ed(Ranges|C(h(ild|artItem(s)?)|olor|ells)|I(nd(ices|ex)|tem(s)?)|Date|Path(s)?|Value|Field|Label)?|able(Range)?)|r(ies(Filters)?|v(ice(Name)?|er(SendTime|NonAdapterTime|P(ollDelay|r(ocessingTime|ePushTime))|Adapter(Time|ExternalTime))))|gments)|lider(ThumbClass|DataTipClass)|mooth(ing)?)|h(t(tpHeaders|ml(Host|Text|Loader(Factory)?))|i(story(ManagementEnabled|Position|Length)|t(Set|TestState|Data|Area)|de(ChildrenTargets|Delay|Effect|FocusRing)?|erarch(y|i(calCollectionView|es))|gh(Number|lightElements|Value|Fi(eld|lter))?)|orizontal(Scroll(Bar|Po(sition|licy))|Center|PageScrollSize|Focus|LineScrollSize|Axis(R(enderer(s)?|atio))?)?|e(ight(By|To|ExcludingOffsets|From|Limit)?|ader(s|Renderer(Providers)?|Height|Text|Item|Part|Format|WordWrap)?)|a(s(Root|BackgroundImage|Children|FocusableContent|All)|ndlerFunction))|ROW_AXIS|y(By|Number|To|e(sLabel|ar(S(ymbol|ource)|NavigationEnabled|Property|Listener))|Value|F(i(eld|lter)|rom))?|n(o(n(InheritingStyles|ZeroTextHeight)|MatchError|NumError|TypeError|ExpressionError|Label)|u(llItemRenderer|m(R(ows|adioButtons)|ModalWindows|C(hildren|olumns)|eric|Dividers|ber|Lines|AutomationChildren))|e(stLevel|t(Connection|workRTT)|edRightSeparator(Events)?|w(State|ColumnIndex|Index|Date|Value|Line)|gativeError|xt(TabIndex|Value))|a(tive(Menu(Item)?|Window|Application)|vigateInSystemBrowser|me(Co(lumn|mpareFunction)|Field)?))|c(h(ild(Descriptors|ren(DragEnabled|Field)?)?|a(nnel(s|Set(s)?|Ids)?|rt(State|Item|DataProvider)))|trlKey|o(n(str(uctor|aint(Rows|Columns))|nect(Timeout|ed)|currency|t(e(nt(Mouse(X|Y)|Height|Type|Width)?|xt(Menu|Color))|ainer|rol(Bar|Key))|denseWhite|version)|de|unt(ry)?|l(Span|or(PickerToolTip|Field)?|umn(s|Span|Names|Count|Index|Width(Ratio)?)?)|r(nerRadius|relation(Id)?)|m(p(uted(Gutters|M(inimum|aximum))|a(tibility(ErrorFunction|Version(String)?)|reFunction))|mandKey))|u(stomFilter|ePoint(s|Manager(Class)?|Name|T(ype|ime))|r(sor(Manager|Children)|ren(cySymbol(Error)?|t(S(cene|tate)|C(hannel|ursor(XOffset|YOffset|ID))|T(oolTip|arget)|I(ndex|tem)|Depth|PageHeight|Frame|Label(s)?)?))|be(s|Array)?)|l(i(ck(Count|Target)|pContent|ent(ReceiveTime|Id))|ose(Button|d|Number|Value|Fi(eld|lter))?|ustered|assName)|a(seInsensitive|n(cel(able|Label)|Navigate(Back|Down|Up|Forward))|che(Response|Heuristic|Policy|able|AsBitmap)?|tegory(Field)?|p(s|tureRollEvents)|r(d(Number(Source|Property|Listener)|Type(Source|Property|Listener))|etIndex))|reat(i(ngContentPane|on(Callback|Index|DateColumn|Policy))|eMaskFunction))|t(h(ickness|ousandsSeparator(To|From)?|umb(Count|Index))|ype(Registry|Column)?|i(ck(s(BetweenLabels)?|Interval|Values)|tle(Renderer|Bar(Factory)?|TextField|Icon)?|le(Height|Width)|me(stamp|ToLive|OfDay))|o(tal(Time|PushTime|Value|Frames)?|State|o(ManyAtSignsError|ShortError|lTip(C(hildren|lass)|Field)?|LongError)|p(Offset|Le(velSystemManager|ft))?|ken|Value|ggle(OnClick)?)|uples|ext(Snapshot|Height|Color|Decoration|Encoding(Override|Fallback)|Width|Align)?|ween(ingProperties)?|lRadius|a(rget(s|Factory|Area)?|b(Stops|Children|Index|Enabled))|r(Radius|igger(Event)?|u(stContent|ncateToFit)|eeColumn|a(ns(ition(s|RenderData)|p(ort|arent)|form)|c(e(On|Level)|kAsMenu))))|i(s(Measure|Buffering|Style|D(ocument|ragging)|P(opUp|laying)|Error|Valid|Loading|All)|n(s(tance(s|Class|Ind(ices|ex))|ert(NewLines|Position))|heritingStyles|ner(Radius)?|clude(Category|Time|In(Ranges|Layout)|Date|Level)|te(r(nal(StyleName|LabelFunction)|polat(ionMethod|eValues)|val|active)|gerError)|itializ(ingLabel|ed)|de(nt|terminate|x)|putFormat|valid(NumberError|CharError|IPDomainError|DomainError|PeriodsInDomainError|FormatCharsError)|fo)|con(Class|F(ield|unction))?|t(e(rator|m(s|Renderer(Providers)?|Sum|I(ndex|cons)|OldY|Editor(Instance)?|Label|AutomationValue)?)|alic(ToolTip)?)|d(3|leTimeout)?|gnore(Padding|Whitespace)|meMode)|SLICER_AXIS|z(oom(Height(To|From)|Width(To|From))|Number|eroStartError|Value|Filter)?|o(therAxes|uterRadius|p(e(n(ing|N(odes|umber)|Items|Paths|Value|Fi(eld|lter)|Always)?|ration(s)?)|aqueBackground)|ver(State|rides)|kLabel|ffs(creenExtra(Rows(OrColumns)?|Columns)|et(X|Y)?)|wner|ld(X|State|Height|Y|ColumnIndex|Index|Value|Width|Location)|rigin(X|Y|a(tingMessageS(ize|entTime)|lHeight))?|bjectEncoding)|d(i(s(c(losureIcon|ard)|tance|p(lay(Name(Function)?|Text|I(cons|temsExpanded)|ed(Month|Year)|DisclosureIcon|LocalTime|AsPassword)|atchEvent)|abled(Ranges|Days))|viderIndex|rect(ion|ory)|mension(s)?)|o(c(ument|k(IconMenu)?)|ubleClickEnabled|wnState|m(ain|Window))|uration|e(s(c(ending|ript(ion|or))|tination)|cimal(Separator(To|From)?|PointCountError)|tail|pth|fault(Member|Button(Enabled|Flag)?|Headers|CellString|TextFormat|Invalid(ValueError|FormatError)|ObjectEncoding|Encoder|Value|Factory|LinkProtocol)|lta)|a(y(Source|Names(Short|Long)?|Property|Listener)|t(eFormatString|a(C(hildren|ompareFunction)|T(ip(Mode|Items|F(ield|ormatFunction|unction))|ransform)|Interval|Descriptor|Units|Provider|F(ield|unction))?))|r(op(down(Factory|Width)?|Target|Parent|Enabled)|ag(MoveEnabled|Source|Initiator|Enabled|g(edItem|able(Columns)?))))|C(OLUMN_AXIS|URRENT)|u(se(RichTextClipboard|HandCursor|NegativeSign|Cache|T(housandsSeparator|woColumns)|Duration|P(hasedInstantiation|r(oxy|eloader))|rAgent)|n(i(tSize|que(Name)?)|derline(ToolTip)?)|i(d|Component)|p(State|dateCompletePendingFlag|perMargin)|r(i|l))|joints|p(i(ggybackingEnabled|xel(Snapping|H(inting|eight)|Width))|o(sition(s)?|pUp(Children)?|lling(Interval|Enabled)?|rt(Type)?)|dfCapability|ush(edMessageFlag|OneWayTime)|er(cent(Height|Complete|Value|Width|Loaded)|ElementOffset|WedgeExplodeRadius)|la(y(head(Time|UpdateInterval)|ing)|cement)|a(n(To|EasingFunction|From)|intsDefaultBackground|dding|r(seFunction|ent(Menu|Document|Application)?|ameters)|ge(S(crollSize|ize)|Height|Title|Width))|r(intAsBitmap|o(cessedDescriptors|to(col|type)|pert(y(NameMap|Changes)?|ies(Factory)?)|gress(Interval)?|mpt)|e(cision(Error)?|viousValue|loader(Background(Size|Color|Image|Alpha))?)))|e(n(tries|d(ian|Index|point(URI)?)?|umerationMode|abled)|dit(or(XOffset|HeightOffset|YOffset|DataField|UsesEnterKey|WidthOffset)|edItem(Renderer|Position)|able)|vent(s|ClassName|Type|Phase)|ffect(s|Host|TargetHost|Instance)?|lement(s|Bounds|Offset)?|asingFunction|rror(Message|S(hown|tring)|Code|Text|ID)?|x(ceedsMaxError|ten(sions|d(edData|LabelToEnd))|p(l(icit(M(in(Height|Width)|embers|ax(Height|Width))|Height|Width)|odeRadius)|ression))|m(phasized|bed(dedFontList|Fonts)))|v(i(sible(Region|Children|Index|Data)?|deo(Height|Width)|ew(Metrics(AndPadding)?|SourceURL)?)|olume(To|EasingFunction|From)?|ertical(Scroll(Bar|Po(sition|licy))|Center|PageScrollSize|Focus|LineScrollSize|Axis(R(enderer(s)?|atio))?)|a(l(id(NextPage|P(oints|atternChars|reviousPage)|at(ionSubField|eAsString))|ue(s)?)|ria(nt|bleRowHeight)))|k(nockout|ind|e(y(Code|Equivalent(ModifiersFunction|F(ield|unction)))|rning))|q(name|uery)|f(i(eld(s|Separator)?|l(ter(s|Map|Styles|edCache|Data|Properties|Function)?|e|l(Function)?)|rst(DayOfWeek|Visible(Row|Item)))|o(nt(S(tyle|ize(ToolTip)?)|Name|Context|Type|Family(ToolTip)?|Weight)?|c(us(Rect|Manager|Pane|Enabled)|alPointRatio)|r(cePartArrays|Description|wardHistory|Verification|mat(s|te(dValue|r)|String|Error)?))|l(exContextMenu|ags)|a(ctory|iloverURIs|de(InDuration|OutDuration)|ult(string|code|String|Code|Detail|actor)?)|r(om(State|Value)|a(gment|me(sLoaded|Rate))))|w(sdl(Operation)?|i(ndow|dth(By|To|ExcludingOffsets|From)?)|ordWrap|eight|rong(MonthError|YearError|CAFormatError|TypeError|DayError|USFormatError|FormatError|LengthError))|l(i(st(Items|ener|Data)?|n(eScrollSize|kToolTip)|ve(Scrolling|Dragging)?)|o(c(ked(RowCount|ColumnCount)|a(tion|l(X|Y|e(Chain)?)))|o(ps|kAheadDuration)|w(Number|er(Margin|ThanMinError)|Value|Fi(eld|lter))?|ade(d|r(Context|Info)))|e(ngth|tterSpacing|vel(s)?|ft(Margin|Offset)?|ading|gend(ItemClass|Data))|a(st(Result|URL|VisibleRow)|yout|nguage|bel(s|Renderer|Scale|Container|Data|Units|Placement|F(ield|unction)|Angle)?))|a(s(Type|pectRatio)|n(notationElements|tiAliasType|imate|g(ularAxis|le(To|From)?))|c(c(urate|essibilityProperties)|t(i(on|veEffects)|ualColNum)|knowledgeMessage)|ttribute(s|Name)?|ut(henticate(d)?|o(Re(peat|wind)|BandWidthDetection|Size|Connect|Play|Exit|mation(Manager|Name|TabularData|Object(Helper)?|Delegate|Environment|Value)|L(oad|ayout)|Adjust))|pp(lication(ID|Domain)?|roximate)|fter(Bounds|Last)|l(tKey|ign(Symbol|ToolTip|LabelsToUnits)?|pha(To|From)?|ways(ShowSelection|InFront)|l(MemberName|ow(MultipleSelection|Negative(ForStacked)?|T(humbOverlap|rackClick)|Interaction|edFormatChars|D(isjointSelection|ragSelection))))|r(eaCode(Format)?|g(s|ument(s|Names)))|g(ent|gregator)|x(is(Ordinal)?|es))|r(sl(Total|Index)|ight(Margin|Offset)?|o(tation|ot(Cause|URL)?|und(ing|Value)|w(Span|Height|Count|In(dex|fo))|le)|untimeApplicationDomain|e(s(trict(ionNeeded)?|iz(eToContent|able(Columns)?)|u(lt(s|Headers|Format)?|bscribe(Interval|Attempts))|pon(seMessageSize|ders)|e(tHistory|rveExplodeRadius))|ndere(d(XOffset|Base|HalfWidth|YOffset)|r(IsEditor|Providers)?)|c(ycleChildren|o(nnect(ing|Interval|Attempts)|rd(ReplayLimit|XSIType|Message(Sizes|Times)|ing|Headers|edLinesCount)))|turnType|jected|p(eat(Count|er(s|Ind(ices|ex))?|Delay)?|lay(ing|ableEvent))|qu(ired(Semantics|FieldError)?|est(Timeout)?)|l(evant(Styles|Properties)|at(iveTo|edObject))|a(son|dy)|move(dElementOffset|ColumnFromSort)?)|a(tio|di(us(Field|Axis)?|alAxis)|wChildren))|g(utters|enerator|r(idFitType|o(up(RowHeight|ing(ObjectFunction|Function)?|Name|I(conFunction|temRenderer)|edColumns|LabelFunction)?|wDuration)|aphics))|FIRST|x(siType|By|Number|To|Position|Value|F(i(eld|lter)|rom)|ml(SpecialCharsFilter|Decode|Encode)?)?|m(nemonicIndexF(ield|unction)|i(ssing(UsernameError|PeriodInDomainError|AtSignError)|n(Radius|im(iz(eButton|able)|um(ElementDuration)?)|ScrollPosition|Height|or(Tick(s|Interval|Units)|Interval)|Year|Number|ColumnWidth|Interval|Value|Fi(eld|lter)|Width|Length)?|terLimit)|o(nth(S(ymbol|ource)|Names(Short|Long)?|Property|Listener)|d(ifi(cationDateColumn|esSelection)|ule(Factory)?|e)|use(X|S(imulator|ensitivity)|Y|Children|Enabled|FocusEnabled|WheelEnabled)|v(i(ngColumnIndex|eClip(Data)?)|e(Duration|EasingFunction)))|u(stUnderstand|lti(ColumnSort|plePartsFormat|line))|e(ssage(Size|Id|Agents)?|nu(s|Bar(Item(s|Renderer|State|Index))?|SelectionMode)?|t(hod|adata)|asure(s|d(Min(Height|Width)|BranchIconWidth|Height|TypeIconWidth|IconWidth|Width))|mbers)|a(sk|nageCookies|tched(S(tring|ubstrings)|Index)|intainAspectRatio|keObjectsBindable|rker(AspectRatio)?|x(R(ows|adius)|Measured(BranchIconWidth|TypeIconWidth|IconWidth)|BarWidth|im(iz(eButton|able)|um(LabelPrecision)?)|Scroll(H|Position|V)|H(orizontalScrollPosition|eight)|Year|C(hars|olumn(s|Width))|TipWidth|V(erticalScrollPosition|alue)|Width|L(ength|abel(Radius|Width)))?))|b(ytes(Total|Loaded|Available)|itmapData|o(ttom(Right|ScrollV|Offset)?|okmark|dy|und(s|ingBoxName|edValues)|ld(ToolTip)?|rder(Metrics|Color)?)|u(ndleName|tton(Mode|Height|Down|Flags|Width)|fferTime|llet(ToolTip)?|bbles)|e(fore(Bounds|First)|ginIndex)|l(Radius|ockIndent|ur(X(To|From)|Y(To|From))|endMode)|a(se(dOn|line(Position)?|AtZero)?|ck(History|ground(Size|Color|Image(Bounds)?|Elements|Alpha)?)|rWidthRatio)|rRadius)|LAST)\\b',
          name: 'support.property.mx.actionscript.3'
        }
      ]
    },
    'framework-top-level': {
      patterns: [
        {
          match:
            '\\b(RETURNINDEXEDARRAY|M(IN_VALUE|AX_VALUE)|SQRT(1_2|2)|N(UMERIC|EGATIVE_INFINITY|aN)|CASEINSENSITIVE|DESCENDING|UNIQUESORT|P(I|OSITIVE_INFINITY)|E|L(N(10|2)|OG(10E|2E)))\\b',
          name: 'support.constant.top-level.actionscript.3'
        },
        {
          match:
            '\\b(s(hift|in|o(rt(On)?|me)|ubstr(ing)?|pli(ce|t)|e(t(M(i(nutes|lliseconds)|onth)|tings|Se(conds|ttings)|Hours|Name(space)?|Children|Time|Date|UTC(M(i(nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|PropertyIsEnumerable|FullYear|LocalName)|arch)|qrt|lice)|has(SimpleContent|ComplexContent|OwnProperty)|R(e(ferenceError|gExp)|angeError)|n(o(deKind|rmalize)|ame(space(Declarations)?)?)|c(h(ild(Index|ren)?|ar(CodeAt|At))|o(s|n(cat|tains)|py|mments)|eil|all)|XML(List)?|Boolean|t(o(XMLString|String|TimeString|DateString|U(TCString|pperCase)|Precision|Exponential|Fixed|Lo(cale(String|TimeString|DateString|UpperCase|LowerCase)|werCase))|e(st|xt)|an)|i(sPrototypeOf|n(sertChild(Before|After)|t|ScopeNamespaces|dexOf))|S(yntaxError|tring|ecurityError)|de(scendants|faultSettings)|N(umber|amespace)|u(nshift|int)|join|TypeError|p(o(p|w)|ush|ar(se|ent)|r(o(cessingInstructions|pertyIsEnumerable)|ependChild))|e(very|lements|x(p|ec))|Object|D(efinitionError|ate)|valueOf|U(RIError|TC)|f(ilter|orEach|loor|romCharCode)|E(valError|rror)|l(o(cal(Name|eCompare)|g)|ength|astIndexOf)|a(sin|cos|t(tribute(s)?|an(2)?)|ddNamespace|pp(endChild|ly)|bs)|VerifyError|r(ound|e(place|verse|moveNamespace)|andom)|get(M(i(nutes|lliseconds)|onth)|S(tackTrace|econds)|Hours|Time(zoneOffset)?|Da(y|te)|UTC(M(i(nutes|lliseconds)|onth)|Seconds|Hours|Da(y|te)|FullYear)|FullYear)|QName|m(in|a(tch|p|x))|Ar(ray|gumentError))\\b(\\s)?',
          name: 'support.function.top-level.actionscript.3'
        },
        {
          match:
            '\\b(s(ource|econds(UTC)?)|hours(UTC)?|name|c(onstructor|allee)|time(zoneOffset)?|ignore(C(omments|ase)|ProcessingInstructions|Whitespace)|d(otall|a(y(UTC)?|te(UTC)?))|uri|pr(ototype|e(tty(Indent|Printing)|fix))|e(rrorID|xtended)|fullYear(UTC)?|l(ocalName|ength|astIndex)|global|m(i(nutes(UTC)?|lliseconds(UTC)?)|onth(UTC)?|ultiline|essage))\\b',
          name: 'support.property.top-level.actionscript.3'
        }
      ]
    },
    frameworks: {
      patterns: [
        {include: '#support-classes'},
        {include: '#framework-top-level'},
        {include: '#framework-mx'},
        {include: '#framework-fl'},
        {include: '#framework-flash'}
      ]
    },
    'global-methods': {
      match:
        '\\b(decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|escape|isFinite|isNaN|isXMLName|parseFloat|parseInt|trace|unescape)\\b(\\s)?',
      name: 'support.function.global.actionscript.3'
    },
    'global-types': {
      match:
        '\\b(Array|Boolean|Class|Date|int|Number|Object|XML|XMLList|uint|String)\\b',
      name: 'support.type.function.global.actionscript.3'
    },
    'global-types-experimental': {
      begin: '\\b(Vector)\\b(\\.<)',
      beginCaptures: {
        1: {name: 'support.as4.type.function.actionscript.3'},
        2: {name: 'keyword.operator.symbolic.actionscript.3'}
      },
      end: '>',
      endCaptures: {0: {name: 'keyword.operator.symbolic.actionscript.3'}},
      patterns: [{include: '#global-types'}]
    },
    globals: {
      patterns: [
        {include: '#global-methods'},
        {include: '#global-types'},
        {include: '#global-types-experimental'}
      ]
    },
    imports: {
      captures: {
        2: {name: 'support.class.actionscript.3'},
        3: {name: 'punctuation.terminator.actionscript.3'}
      },
      match: '(import)\\s+(.*?)((;)|$)',
      name: 'storage.type.import.actionscript.3'
    },
    included: {
      begin: '\\/\\/AS3_INCLUDE_FILE',
      beginCaptures: {0: {name: 'comment.line.double-slash.actionscript.3'}},
      contentName: 'meta.included.actionscript.3',
      end: '\\/\\/AS3_INCLUDE_FILE',
      endCaptures: {0: {name: 'comment.line.double-slash.actionscript.3'}},
      patterns: [
        {include: 'text.html.asdoc'},
        {include: '#strings'},
        {include: '#regexp'},
        {include: '#numbers'},
        {include: '#comments'},
        {include: '#variables'},
        {include: '#compiler-metadata'},
        {include: '#compiler-metadata-custom'},
        {include: '#language-elements'},
        {include: '#support-classes'},
        {include: '#language-storage'},
        {include: '#methods-all'},
        {include: '#method-block'}
      ]
    },
    interface: {
      begin:
        '(?x)\t\t\t\t# Turn on extended mode\n\t\t\t\t\t ^\t\t\t\t\t# a line beginning with\n\t\t\t\t\t \\s*\t\t\t\t# some optional space\n\t\t\t\t\t (\\b(public)\\b\\s+)\t# namespace\n\t\t\t\t\t (interface)\\s+\t\t# interface declaration and at least one char. of whitespace\n\t\t\t\t\t (\\w+)              # interface name.\n\t\t\t\t\t \\s*',
      beginCaptures: {
        1: {name: 'storage.type.namespace.actionscript.3'},
        3: {name: 'storage.type.modifier.actionscript.3'},
        4: {name: 'entity.name.type.class.actionscript.3'}
      },
      end: '\\}',
      name: 'meta.interface.actionscript.3',
      patterns: [
        {include: '#interface-extends'},
        {include: '#interface-getter-setters'},
        {include: '#interface-methods'},
        {include: '#language-include'},
        {include: 'text.html.asdoc'},
        {include: '#comments'},
        {include: '#interface-errors'}
      ]
    },
    'interface-error-block': {
      begin: '\\{',
      end: '\\}',
      name: 'invalid.illegal.actionscript.3'
    },
    'interface-errors': {
      patterns: [
        {
          match: '^\\s*\\b(public|private|protected|\\w+)\\b\\s+(function).*$',
          name: 'invalid.illegal.interface.actionscript.3'
        }
      ]
    },
    'interface-extends': {
      begin: '(\\b(extends)\\b)',
      beginCaptures: {2: {name: 'storage.modifier.actionscript.3'}},
      end: '(\\{)',
      endCaptures: {1: {name: 'punctuation.bracket.end'}},
      name: 'meta.definition.interface.extends.actionscript.3',
      patterns: [
        {include: '#support-classes'},
        {include: '#comments'},
        {
          match: '\\b(\\w+)\\b\\s*',
          name: 'entity.name.type.class.actionscript.3'
        },
        {include: '#package-path'},
        {match: ',', name: 'punctuation.seperator.extends.actionscript.3'},
        {
          match: '[^\\s\\}]',
          name: 'invalid.illegal.expected-extends.seperator.actionscript.3'
        }
      ]
    },
    'interface-getter-setters': {
      patterns: [
        {
          begin:
            '(?x)\n\t\t\t\t\t\t\t ^\\s*                   # start of line, optional whitespace\n\t\t\t\t\t\t\t (function)\\s+          # function declaration\n\t\t\t\t\t\t\t (\\bget\\b)\\s+           # accessor\n\t\t\t\t\t\t\t (\\w+)                  # Method name.\n\t\t\t\t\t\t\t \\s*\n\t\t\t\t\t\t\t (\\()\n\t\t\t\t\t\t\t \\s*\n\t\t\t\t\t\t\t (.*)?\n\t\t\t\t\t\t\t \\s*\n\t\t\t\t\t\t\t (\\))\n\t\t\t\t\t\t\t \\s*:\\s*',
          beginCaptures: {
            1: {name: 'storage.type.function.actionscript.3'},
            2: {name: 'storage.type.accessor.actionscript.3'},
            3: {name: 'entity.name.function.actionscript.3'},
            4: {name: 'punctuation.definition.parameters.begin.actionscript.3'},
            5: {name: 'invalid.illegal.actionscript.3'},
            6: {name: 'punctuation.definition.parameters.end.actionscript.3'}
          },
          end: '$|;',
          name: 'meta.definition.getter.interface.actionscript.3',
          patterns: [
            {
              match: '(\\bvoid\\b)',
              name: 'invalid.illegal.return-type.actionscript.3'
            },
            {include: '#global-types'},
            {include: '#support-classes'},
            {include: '#wildcard'}
          ]
        },
        {
          begin:
            '(?x)\n\t\t\t\t\t\t\t ^\\s*                   # start of line, optional whitespace\n\t\t\t\t\t\t\t (function)\\s+          # function declaration\n\t\t\t\t\t\t\t (\\bset\\b)\\s+           # accessor\n\t\t\t\t\t\t\t (\\w+)                  # method name\n\t\t\t\t\t\t\t \\s*\n\t\t\t\t\t\t\t (\\()',
          beginCaptures: {
            1: {name: 'storage.type.function.actionscript.3'},
            2: {name: 'storage.type.accessor.actionscript.3'},
            3: {name: 'entity.name.function.actionscript.3'},
            4: {name: 'punctuation.definition.parameters.begin.actionscript.3'}
          },
          end: '(?x)\n\t\t\t\t\t\t\t(\\))\n\t\t\t\t\t\t\t\\s*:\\s*\n\t\t\t\t\t\t\t(\n\t\t\t\t\t\t\t\t(void)\n\t\t\t\t\t\t\t\t|\n\t\t\t\t\t\t\t\t(\\w+)\n\t\t\t\t\t\t\t)',
          endCaptures: {
            1: {name: 'punctuation.definition.parameters.end.actionscript.3'},
            3: {name: 'keyword.type.void.actionscript.3'},
            4: {name: 'invalid.illegal.actionscript.3'}
          },
          name: 'meta.definition.setter.interface.actionscript.3',
          patterns: [
            {include: '#method-parameters'},
            {include: '#comments'},
            {begin: ',', end: '(?=\\))', name: 'invalid.illegal.actionscript.3'}
          ]
        }
      ]
    },
    'interface-methods': {
      begin:
        '(?x)\n\t\t\t\t\t ^\\s*                   # start of line, optional whitespace\n\t\t\t\t\t (function)\\s+          # function declaration\n\t\t\t\t\t (\\s*\\w+)               # Method name.\n\t\t\t\t\t \\s*(\\()',
      beginCaptures: {
        1: {name: 'storage.type.function.actionscript.3'},
        2: {name: 'entity.name.function.actionscript.3'},
        5: {name: 'punctuation.definition.parameters.begin.actionscript.3'}
      },
      end: '(;)',
      endCaptures: {
        1: {name: 'punctuation.definition.line.end.actionscript.3'}
      },
      name: 'meta.definition.method.interface.actionscript.3',
      patterns: [
        {
          match: '(\\))',
          name: 'punctuation.definition.parameters.end.actionscript.3'
        },
        {include: '#method-parameters'},
        {include: '#method-parameters-default'},
        {include: '#comments'},
        {include: '#list-seperator'},
        {match: ':', name: 'punctuation.seperator.return-type.actionscript.3'},
        {include: '#method-return-void'},
        {include: '#global-types'},
        {include: '#support-classes'}
      ]
    },
    'language-constants': {
      patterns: [
        {match: '\\bnull\\b', name: 'constant.language.null.actionscript.3'},
        {
          match: '\\btrue\\b',
          name: 'constant.language.boolean.true.actionscript.3'
        },
        {
          match: '\\bfalse\\b',
          name: 'constant.language.boolean.false.actionscript.3'
        },
        {
          match: '\\b(Infinity|-Infinity|undefined|NaN)\\b',
          name: 'constant.language.actionscript.3'
        },
        {
          match: '\\b([A-Z0-9\\_]+?)\\b',
          name: 'constant.language.conventional.actionscript.3'
        }
      ]
    },
    'language-elements': {
      patterns: [
        {include: '#globals'},
        {include: '#language-constants'},
        {include: '#language-keywords'},
        {include: '#language-operators'},
        {include: '#language-storage'}
      ]
    },
    'language-include': {
      patterns: [
        {
          begin: '^\\s*(include)\\b',
          end: '$',
          name: 'storage.include.actionscript.3',
          patterns: [{include: '#strings'}]
        }
      ]
    },
    'language-keywords': {
      patterns: [
        {
          match: '\\b(prototype)\\b',
          name: 'keyword.top-level.property.actionscript.3'
        },
        {
          match:
            '\\b(if|else|while|do|for|each|in|case|switch|do|default|with)\\b',
          name: 'keyword.control.actionscript.3'
        },
        {
          match: '\\b(try|catch|finally|throw)\\b',
          name: 'keyword.control.catch-exception.actionscript.3'
        },
        {
          match: '\\b(exit|return|break|continue)\\b',
          name: 'keyword.control.end.actionscript.3'
        },
        {
          match: '\\b(as|delete|new|is|typeof)\\b',
          name: 'keyword.operator.actionscript.3'
        },
        {
          match: '\\b(\\*|Null|void)\\b',
          name: 'keyword.special-type.actionscript.3'
        },
        {
          match: '\\binstanceof\\b',
          name: 'invalid.illegal.deprecated.actionscript.3'
        }
      ]
    },
    'language-operators': {
      patterns: [
        {
          match: '(?<=[.])(\\s|,|;|\\)|\\])',
          name: 'meta.scope.following.dot.actionscript.3'
        },
        {
          match: '[-!%&*+=/?:\\|<>;\\[\\]]',
          name: 'keyword.operator.symbolic.actionscript.3'
        },
        {match: '\\.', name: 'keyword.operator.symbolic.dot.actionscript.3'}
      ]
    },
    'language-storage': {
      patterns: [
        {
          match: '(\\buse\\s+namespace\\b)|(\\bdefault\\s+xml\\s+namespace\\b)',
          name: 'storage.modifier.namespace.actionscript.3'
        },
        {
          match: '\\b(AS3|flash_proxy|object_proxy)\\b',
          name: 'keyword.namespace.actionscript.3'
        },
        {include: '#language-include'},
        {
          match: '\\#include\\b',
          name: 'invalid.illegal.deprecated.actionscript.3'
        },
        {
          match:
            '\\b(dynamic|final|internal|native|override|private|protected|public|static)\\b',
          name: 'storage.modifier.actionscript.3'
        },
        {
          match:
            '\\b(\\.\\.\\.|class|const|extends|function|get|implements|interface|package|set|namespace|var)\\b',
          name: 'storage.type.actionscript.3'
        }
      ]
    },
    'list-seperator': {
      match: ',',
      name: 'punctuation.separator.actionscript.3'
    },
    method: {
      begin:
        '(?x)\n\t\t\t         ^\\s*\n    \t\t\t     ((override|static)\\s+){0,2}                                  # Optional override or static\n    \t\t\t     (public|private|protected|internal|final|dynamic|\\w+)\\s+ # Namespace\n    \t\t\t     ((override|static)\\s+){0,2}                                           # Optional static.\n    \t\t\t     (function)\\s+\n    \t\t\t     (\\s*\\w+)                                                 # Method name.\n    \t\t\t     \\s*(\\()',
      beginCaptures: {
        2: {name: 'storage.modifier.actionscript.3'},
        3: {name: 'storage.type.namespace.actionscript.3'},
        5: {name: 'storage.modifier.actionscript.3'},
        6: {name: 'storage.type.function.actionscript.3'},
        7: {name: 'entity.name.function.actionscript.3'},
        8: {name: 'punctuation.definition.parameters.begin.actionscript.3'}
      },
      end: '(?=\\{)',
      endCaptures: {
        1: {name: 'punctuation.definition.parameters.end.actionscript.3'}
      },
      name: 'meta.definition.method.actionscript.3',
      patterns: [
        {include: '#comments'},
        {include: '#method-parameters'},
        {include: '#method-parameters-default'},
        {include: '#list-seperator'},
        {include: '#method-return'}
      ]
    },
    'method-block': {
      begin: '\\{',
      end: '\\}',
      name: 'meta.function.actionscript.3',
      patterns: [{include: '#block'}, {include: '#block-contents'}]
    },
    'method-getter-setters': {
      patterns: [
        {
          begin:
            '(?x)                                                               # Extended mode\n\t\t\t\t\t         ^\\s*                                                               # Start of line, optional whitespace\n    \t\t\t             ((override|static)\\s+){0,2}                                            # Optional override\n    \t\t\t             (public|private|protected|internal|final|dynamic|\\w+)\\s+           # namespace declaration\n    \t\t\t             ((static)\\s+){0,2}                                                     # Optional static\n    \t\t\t             (function)\\s*                                                      # function declaration\n                             (set)\\s+                                                           # set declaration\n                             (\\w+)\\s*                                                           # getter name, optional whitespace\n    \t\t\t             (\\()',
          beginCaptures: {
            2: {name: 'storage.modifier.actionscript.3'},
            3: {name: 'storage.type.namespace.actionscript.3'},
            5: {name: 'storage.modifier.actionscript.3'},
            6: {name: 'storage.type.function.actionscript.3'},
            7: {name: 'storage.type.accessor.actionscript.3'},
            8: {name: 'entity.name.function.actionscript.3'},
            9: {name: 'punctuation.definition.parameters.begin.actionscript.3'}
          },
          end: '(?x)\n\t\t\t\t\t\t\t (\\))\n\t\t\t\t\t\t\t \\s*:\\s*\n\t\t\t\t\t\t\t (\n\t\t\t\t\t\t\t \t(void)\n\t\t\t\t\t\t\t \t|\n\t\t\t\t\t\t\t \t(\\w+)\n\t\t\t\t\t\t\t  )',
          endCaptures: {
            1: {name: 'punctuation.definition.parameters.end.actionscript.3'},
            3: {name: 'keyword.type.void.actionscript.3'},
            4: {name: 'invalid.illegal.actionscript.3'}
          },
          name: 'meta.definition.setter.actionscript.3',
          patterns: [
            {include: '#method-parameters'},
            {include: '#comments'},
            {begin: ',', end: '(?=\\))', name: 'invalid.illegal.actionscript.3'}
          ]
        },
        {
          begin:
            '(?x)\n\t\t\t\t\t         ^\\s*\n    \t\t\t             (\n    \t\t\t                 (override|static)\\s+\n    \t\t\t             ){0,2}\n    \t\t\t             (public|private|protected|internal|static|final|dynamic|\\w+)\\s+\n    \t\t\t             (\n    \t\t\t                 (override|static)\\s+\n    \t\t\t             ){0,2}\n    \t\t\t             (function)\n    \t\t\t             \\s*\n                             (get)\n                             \\s+\n                             (\\w+)\n                             \\s*\n    \t\t\t             (\\()\n    \t\t\t             \\s*\n    \t\t\t             (.*)?\n    \t\t\t             \\s*\n    \t\t\t             (\\))\n    \t\t\t             \\s*:\\s*',
          beginCaptures: {
            10: {name: 'invalid.illegal.actionscript.3'},
            11: {name: 'punctuation.definition.parameters.end.actionscript.3'},
            2: {name: 'storage.modifier.actionscript.3'},
            3: {name: 'storage.type.namespace.actionscript.3'},
            5: {name: 'storage.modifier.actionscript.3'},
            6: {name: 'storage.type.function.actionscript.3'},
            7: {name: 'storage.type.accessor.actionscript.3'},
            8: {name: 'entity.name.function.actionscript.3'},
            9: {name: 'punctuation.definition.parameters.begin.actionscript.3'}
          },
          end: '(?=\\{)',
          name: 'meta.definition.getter.actionscript.3',
          patterns: [
            {
              match: '(\\bvoid\\b)',
              name: 'invalid.illegal.return-type.actionscript.3'
            },
            {include: '#global-types'},
            {include: '#support-classes'},
            {include: '#wildcard'}
          ]
        }
      ]
    },
    'method-package': {
      name: 'meta.definition.method.package.actionscript.3',
      patterns: [{include: '#method'}, {include: '#method-block'}]
    },
    'method-parameters': {
      captures: {
        1: {name: 'variable.paramater.method.actionscript.3'},
        2: {name: 'punctuation.seperator.actionscript.3'},
        4: {name: 'support.class.actionscript.3'},
        5: {name: 'storage.type.wildcard.actionscript.3'},
        6: {name: 'storage.type.rest.actionscript.3'}
      },
      match:
        '(?x)\n\t\t\t\t\t (\\$?\\w+)       # paramater name\n\t\t\t\t\t \\s*(\\:)\\s*     # type seperator\n\t\t\t\t\t (\n\t\t\t\t\t\t(\\w+)\n\t\t\t\t\t\t|\n\t\t\t\t\t\t(\\*)        # followed by class or wildcard\n\t\t\t\t\t )\n\t\t\t\t\t |(\\.\\.\\.)      # or rest...\n\t\t\t\t\t '
    },
    'method-parameters-default': {
      begin: '(=)',
      beginCaptures: {1: {name: 'keyword.operator.symbolic.actionscript.3'}},
      end: '(?=\\))|(,)',
      patterns: [
        {include: '#strings'},
        {include: '#regexp'},
        {include: '#numbers'},
        {include: '#globals'},
        {include: '#language-constants'}
      ]
    },
    'method-return': {
      begin: '(:)',
      beginCaptures: {
        1: {name: 'punctuation.seperator.return-type.actionscript.3'}
      },
      end: '(?=\\{)',
      name: 'meta.method-return.actionscript.3',
      patterns: [
        {include: '#global-types'},
        {include: '#support-classes'},
        {include: '#method-return-void'},
        {include: '#wildcard'}
      ]
    },
    'method-return-void': {
      patterns: [
        {match: '\\bvoid\\b', name: 'keyword.void.actionscript.3'},
        {match: '\\bVoid\\b', name: 'invalid.illegal.actionscript.3'}
      ]
    },
    'methods-all': {
      patterns: [{include: '#method'}, {include: '#method-getter-setters'}]
    },
    numbers: {
      patterns: [
        {
          match:
            '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)(L|l|UL|ul|u|U|F|f)?\\b',
          name: 'constant.numeric.actionscript.3'
        }
      ]
    },
    'old-hat': {
      patterns: [
        {match: '\\b(intrinsic)\\b', name: 'invalid.deprecated.actionscript.3'}
      ]
    },
    package: {
      patterns: [{include: '#package-signature'}, {include: '#package-block'}]
    },
    'package-block': {
      begin: '\\{',
      end: '\\}',
      name: 'meta.package.actionscript.3',
      patterns: [
        {include: '#imports'},
        {include: '#interface'},
        {include: '#class'},
        {include: '#method-package'},
        {include: 'text.html.asdoc'},
        {include: '#strings'},
        {include: '#comments'},
        {include: '#compiler-metadata'},
        {include: '#compiler-metadata-swf'},
        {include: '#compiler-metadata-custom'},
        {include: '#language-storage'}
      ]
    },
    'package-path': {
      patterns: [
        {
          match: '\\b[\\w.]+\\.(\\b|\\*)',
          name: 'entity.name.package.actionscript.3'
        }
      ]
    },
    'package-signature': {
      begin: '(package)',
      beginCaptures: {1: {name: 'storage.modifier.actionscript.3'}},
      end: '\\s+([\\w\\.]+)?',
      endCaptures: {1: {name: 'entity.name.type.package.actionscript.3'}},
      name: 'meta.package.actionscript.3'
    },
    regexp: {
      begin: '(?<=[=(:]|^|return)\\s*(/)(?![/*+{}?])',
      beginCaptures: {
        1: {name: 'punctuation.definition.string.begin.actionscript.3'}
      },
      end: '(/)[igsmx]*',
      endCaptures: {
        1: {name: 'punctuation.definition.string.end.actionscript.3'}
      },
      name: 'string.regexp.actionscript.3',
      patterns: [
        {match: '\\\\.', name: 'constant.character.escape.actionscript.3'}
      ]
    },
    strings: {
      patterns: [
        {
          begin: '"',
          end: '"',
          name: 'string.quoted.double.actionscript.3',
          patterns: [
            {match: '\\\\.', name: 'constant.character.escape.actionscript.3'}
          ]
        },
        {
          begin: "'",
          end: "'",
          name: 'string.quoted.single.actionscript.3',
          patterns: [
            {match: '\\\\.', name: 'constant.character.escape.actionscript.3'}
          ]
        }
      ]
    },
    'support-classes': {
      patterns: [
        {include: '#support-classes-top-level'},
        {include: '#support-classes-mx'},
        {include: '#support-classes-fl'},
        {include: '#support-classes-flash'}
      ]
    },
    'support-classes-fl': {
      patterns: [
        {
          match:
            '\\b(R(otate(Direction)?|egular|adioButton(Group|AccImpl)?)|M(otion(Event)?|etadataEvent|atrixTransformer)|B(ounce|utton(LabelPlacement|AccImpl)?|ezier(Segment|Ease)|linds|a(se(Button|ScrollPane)|ck))|S(croll(Bar(Direction)?|P(olicy|ane)|Event)|t(yleManager|rong)|i(ne|mple(CollectionItem|Ease))|ou(ndEvent|rce)|electableList(AccImpl)?|kinErrorEvent|queeze|lider(Direction|Event(ClickTarget)?)?)|HeaderRenderer|N(one|CManager(Native)?|umericStepper)|C(heckBox(AccImpl)?|ircular|o(lor(Picker(Event)?)?|m(ponentEvent|boBox(AccImpl)?))|u(stomEase|ePointType|bic)|ellRenderer|aption(ChangeEvent|TargetEvent))|T(ileList(CollectionItem|Data|AccImpl)?|ext(Input|Area)|ween(Event|ables)?|ransition(Manager)?)|I(n(teractionInputType|determinateBar|validationType)|NCManager|CellRenderer|Tween|VPEvent|ris|FocusManager(Group|Component)?|mageCell)|Zoom|Data(Grid(C(olumn|ellEditor)|Event(Reason)?|AccImpl)?|Change(Type|Event)|Provider)|UI(ScrollBar|Component(AccImpl)?|Loader)|P(hoto|ixelDissolve|rogressBar(Mode|Direction)?)|E(lastic|xponential)|Video(S(caleMode|tate)|P(layer|rogressEvent)|E(vent|rror)|Align)|Keyframe|Qu(intic|a(dratic|rtic))|F(ocusManager|unctionEase|ly|ade|LVPlayback(Captioning)?)|Wipe|L(i(st(Data|Event|AccImpl)?|near|vePreviewParent)|ocale|a(youtEvent|bel(Button(AccImpl)?)?))|A(nimator|ccImpl|utoLayoutEvent))\\b',
          name: 'support.class.fl.actionscript.3'
        }
      ]
    },
    'support-classes-flash': {
      patterns: [
        {
          match:
            '\\b(Re(sponder|ctangle)|G(lowFilter|r(idFitType|a(dient(GlowFilter|BevelFilter|Type)|phics)))|XML(Socket|Node(Type)?|Document)|M(icrophone|o(use(Event)?|vieClip|rphShape)|emoryError|atrix)|B(yteArray|itmap(Data(Channel)?|Filter(Type|Quality)?)?|evelFilter|l(urFilter|endMode))|S(ha(pe|redObject(FlushStatus)?)|y(stem|ncEvent)|c(ene|riptTimeoutError)|t(yleSheet|a(ckOverflowError|t(icText|usEvent)|ge(ScaleMode|DisplayState|Quality|Align)?))|impleButton|o(cket|und(Mixer|Channel|Transform|LoaderContext)?)|pr(ite|eadMethod)|ecurity(Domain|Panel|ErrorEvent)?|WFVersion)|HTTPStatusEvent|Net(St(atusEvent|ream)|Connection)|C(SMSettings|o(n(textMenu(BuiltInItems|Item|Event)?|volutionFilter)|lor(MatrixFilter|Transform))|a(p(sStyle|abilities)|mera))|T(imer(Event)?|ext(Renderer|Snapshot|ColorType|DisplayMode|Event|F(ield(Type|AutoSize)?|ormat(Align)?)|LineMetrics)|ransform)|I(n(ter(polationMethod|activeObject)|validSWFError)|ME(ConversionMode|Event)?|BitmapDrawable|OError(Event)?|D(ynamicProperty(Output|Writer)|3Info|ata(Input|Output))|E(ventDispatcher|xternalizable)|llegalOperationError)|ObjectEncoding|D(i(spla(yObject(Container)?|cementMapFilter(Mode)?)|ctionary)|ataEvent|ropShadowFilter)|URL(Request(Method|Header)?|Stream|Variables|Loader(DataFormat)?)|JointStyle|P(ixelSnapping|oint|r(intJob(O(ptions|rientation))?|o(gressEvent|xy)))|E(ndian|OFError|vent(Dispatcher|Phase)?|rrorEvent|xternalInterface)|Video|Key(board(Event)?|Location)|F(ile(Reference(List)?|Filter)|o(nt(Style|Type)?|cusEvent)|ullScreenEvent|rameLabel)|L(ineScaleMode|o(calConnection|ader(Context|Info)?))|A(syncErrorEvent|ntiAliasType|c(cessibility(Properties)?|ti(onScriptVersion|vityEvent))|pplicationDomain|VM1Movie))\\b',
          name: 'support.class.flash.actionscript.3'
        }
      ]
    },
    'support-classes-mx': {
      patterns: [
        {
          match:
            '\\b(R(ichTextEditor|SLEvent|o(tate(Instance)?|undedRectangle)|e(s(ize(Instance|Event)?|ource(Manager(Impl)?|Bundle|Event)|ultEvent|ponder)|nderData|ctangular(Border|DropShadow)|peater(AutomationImpl)?|gExpValidat(ionResult|or)|mo(t(ingMessage|eObject)|ve(Child(Action(Instance)?)?|ItemAction(Instance)?)))|adi(oButton(Group|Icon|AutomationImpl)?|alGradient))|G(low(Instance)?|r(id(Row|Item|Lines)?|ouping(Collection|Field)?|a(dient(Base|Entry)|phicsUtil)))|XML(Util|ListCollection)|M(in(iDebugTarget|Aggregator)|o(dule(Manager|Base|Event|Loader)?|v(ieClip(LoaderAsset|Asset)|e(Instance|Event)?))|ultiTopic(Consumer|Producer)|e(ssag(ingError|e(Responder|SerializationError|PerformanceUtils|Event|FaultEvent|A(ckEvent|gent)))|nu(Bar(BackgroundSkin|Item(AutomationImpl)?|AutomationImpl)?|ShowEvent|ItemRenderer(AutomationImpl)?|Event|ListData|AutomationImpl)?|tadataEvent)|a(skEffect(Instance)?|xAggregator))|B(yteArrayAsset|i(ndingUtils|tmap(Fill|Asset))|o(un(ce|dedValue)|rder|x(ItemRenderer|Di(vider|rection)|AutomationImpl)?)|u(tton(Bar(ButtonSkin|AutomationImpl)?|Skin|LabelPlacement|A(sset|utomationImpl))?|bble(Series(RenderData|Item|AutomationImpl)?|Chart))|lur(Instance)?|a(se(ListData|64(Decoder|Encoder))|ck|r(Se(t|ries(RenderData|Item|AutomationImpl)?)|Chart))|ro(kenImageBorderSkin|wser(Manager|ChangeEvent)))|S(hadow(BoxItemRenderer|LineRenderer)|ystemManager|c(hemaTypeRegistry|roll(Bar(Direction|AutomationImpl)?|ControlBase(AutomationImpl)?|T(humb(Skin)?|rackSkin)|Policy|Event(D(irection|etail))?|ArrowSkin))|t(yle(Manager|Proxy|Event)|a(ckedSeries|t(usBar(BackgroundSkin)?|e(ChangeEvent)?))|r(ing(Util|Validator)|oke|eaming(HTTPChannel|ConnectionHandler|AMFChannel)))|i(ne|mpleXML(Decoder|Encoder))|HA256|o(cialSecurityValidator|und(Effect(Instance)?|Asset)|lidColor|rt(Info|Error|Field)?)|u(m(mary(Row|Object|Field)|Aggregator)|bscriptionInfo)|p(acer|riteAsset)|e(cure(Streaming(HTTPChannel|AMFChannel)|HTTPChannel|AMFChannel)|t(Style(Action(Instance)?)?|Property(Action(Instance)?)?|EventHandler)|quence(Instance)?|r(ies(Slide(Instance)?|Interpolate(Instance)?|Zoom(Instance)?|Effect(Instance)?|AutomationImpl)?|verConfig))|OAP(Message|Header|Fault)|w(itchSymbolFormatter|atch(Skin|PanelSkin))|lider(HighlightSkin|T(humb(Skin)?|rackSkin)|D(irection|ataTip)|Event(ClickTarget)?|Label|AutomationImpl)?|WFLoader(AutomationImpl)?)|H(Rule|Box|i(storyManager|tData|erarchical(CollectionView(Cursor)?|Data))|S(crollBar|lider)|orizontalList|T(ML|TP(RequestMessage|Service|Channel))|eaderEvent|DividedBox|alo(Border|Colors|Defaults|FocusRect)|LOC(Series(RenderData|Base(AutomationImpl)?|Item)?|Chart|ItemRenderer))|N(oChannelAvailableError|um(eric(Stepper(DownSkin|UpSkin|Event|AutomationImpl)?|Axis)|ber(Base(RoundType)?|Validator|Formatter))|etConnectionChannel|a(vBar(AutomationImpl)?|meUtil))|C(h(ild(ItemPendingError|ExistenceChangedEvent)|eckBox(Icon|AutomationImpl)?|a(n(nel(Set|E(vent|rror)|FaultEvent)?|geWatcher)|rt(Base(AutomationImpl)?|S(tate|electionChangeEvent)|Item(DragProxy|Event)?|E(vent|lement)|Label)))|irc(ular|leItemRenderer)|SSStyleDeclaration|o(n(s(traint(Row|Column)|umer)|currency|t(extualClassFactory|ainer(MovieClip(AutomationImpl)?|CreationPolicy|Layout|AutomationImpl)?|rolBar)|figMap)|untAggregator|l(or(Util|Picker(Skin|Event|AutomationImpl)?)|umn(Se(t|ries(RenderData|Item|AutomationImpl)?)|Chart)|lection(Event(Kind)?|ViewError))|m(po(siteEffect(Instance)?|nentDescriptor)|mandMessage|boB(ox(A(utomationImpl|rrowSkin))?|ase(AutomationImpl)?)))|u(ePoint(Manager|Event)|r(sor(Manager(Priority)?|Bookmark|Error)|rency(Validator(AlignSymbol)?|Formatter))|b(ic|eEvent))|l(oseEvent|assFactory)|a(n(dlestick(Series|Chart|ItemRenderer)|vas(AutomationImpl)?)|tegoryAxis|lendarLayoutChangeEvent|rtesian(C(hart(AutomationImpl)?|anvasValue)|Transform|DataCanvas))|r(oss(ItemRenderer|DomainRSLItem)|editCardValidator(CardType)?))|T(i(tle(Ba(ckground|r)|Window)|le(Base(Direction|AutomationImpl)?|Direction|List(ItemRenderer(AutomationImpl)?)?)?)|o(olTip(Manager|Border|Event|AutomationImpl)?|ggleButtonBar(AutomationImpl)?)|ext(Range|SelectionEvent|Input(AutomationImpl)?|FieldA(sset|utomationHelper)|Area(AutomationImpl)?)?|ween(E(vent|ffect(Instance)?))?|ab(Bar|Skin|Navigator(AutomationImpl)?)|r(iangleItemRenderer|ee(ItemRenderer(AutomationImpl)?|Event|ListData|AutomationImpl)?|a(nsition|ceTarget)))|I(R(e(s(ource(Manager|Bundle)|ponder)|ctangularBorder|peater(Client)?)|awChildrenContainer)|GroupingCollection|n(stanceCache|dexChangedEvent|v(okeEvent|alid(C(hannelError|ategoryError)|DestinationError|FilterError)))|XML(SchemaInstance|Decoder|Encoder)|M(XML(Support|Object)|oduleInfo|e(ssage|nu(BarItemRenderer|ItemRenderer|DataDescriptor)))|B(order|utton|ar|rowserManager)|tem(Responder|ClickEvent|PendingError)|S(ystemManager|t(yle(Module|Client)|a(ckable(2)?|teClient)|roke)|impleStyleClient|OAP(Decoder|Encoder))|Hi(storyManagerClient|erarchical(CollectionView(Cursor)?|Data))|C(h(ildList|artElement(2)?)|o(n(straint(Client|Layout)|tainer)|l(umn|lectionView)))|T(oolTip(ManagerClient)?|reeDataDescriptor(2)?)|I(nvalidating|MESupport|mageEncoder)|O(verride|LAP(Result(Axis)?|Member|S(chema|et)|Hierarchy|C(u(stomAggregator|be)|ell)|Tuple|Dimension|Element|Query(Axis)?|Level|A(ttribute|xisPosition)))|D(eferredInstan(ce|tiationUIComponent)|ataRenderer|ropInListItemRenderer)|UI(Component|TextField|D)|Pr(o(pertyChangeNotifier|grammaticSkin)|eloaderDisplay)|Effect(TargetHost|Instance)?|V(iewCursor|alidatorListener)|ris(Instance)?|F(ill|o(ntContextComponent|cusManager(Group|Co(ntainer|mp(onent|lexComponent)))?)|lex(Module(Factory)?|ContextMenu|DisplayObject|Asset)|actory)|mage(Snapshot)?|Window|L(ist(ItemRenderer)?|ogg(ingTarget|er)|ayoutManager(Client)?)|A(dvancedDataGridRendererProvider|utomation(M(ouseSimulator|ethodDescriptor|anager)|Class|TabularData|Object(Helper)?|PropertyDescriptor|E(nvironment|ventDescriptor))|xis(Renderer)?|bstractEffect))|Z(ipCode(Validator(DomainType)?|Formatter)|oom(Instance)?)|O(peration|bject(Util|Proxy)|LAP(Result(Axis)?|Me(asure|mber)|S(chema|et)|Hierarchy|C(ube|ell)|T(uple|race)|D(imension|ataGrid(RendererProvider|GroupRenderer(AutomationImpl)?|HeaderRendererProvider|ItemRendererProvider|AutomationImpl)?)|Element|Query(Axis)?|Level|A(ttribute|xisPosition)))|D(ynamicEvent|i(ssolve(Instance)?|vide(dBox(AutomationImpl)?|rEvent)|amondItemRenderer)|ownloadProgressBar|ualStyleObject|e(scribeTypeCache(Record)?|f(erredInstanceFrom(Class|Function)|ault(TileListEffect|DataDescriptor|ListEffect)))|at(e(RangeUtilities|Base|Chooser(MonthArrowSkin|YearArrowSkin|Indicator|Event(Detail)?|AutomationImpl)?|TimeAxis|Validator|F(ield(AutomationImpl)?|ormatter))|a(Grid(Base|SortArrow|Header(Ba(se|ckgroundSkin)|Separator)?|Column(ResizeSkin|DropIndicator)?|ItemRenderer(AutomationImpl)?|DragProxy|Event(Reason)?|L(istData|ockedRowContentHolder)|AutomationImpl)?|T(ip|ransform)|Description))|r(opdownEvent|ag(Manager(AutomationImpl)?|Source|Event)))|U(RLUtil|nconstrainItemAction(Instance)?|I(MovieClip(AutomationImpl)?|Component(CachePolicy|Descriptor|AutomationImpl)?|TextF(ield(AutomationImpl)?|ormat)|DUtil))|JPEGEncoder|P(hone(NumberValidator|Formatter)|ie(Series(RenderData|Item|AutomationImpl)?|Chart)|o(pUp(M(enu(Button|Icon)|anager(ChildList)?)|Button(Skin|AutomationImpl)?|Icon)|l(lingChannel|ar(Chart|Transform|DataCanvas)))|NGEncoder|lot(Series(RenderData|Item|AutomationImpl)?|Chart)|a(nel(Skin|AutomationImpl)?|use(Instance)?|rallel(Instance)?)|r(int(OLAPDataGrid|DataGrid|AdvancedDataGrid)|o(ducer|pertyChange(s|Event(Kind)?)|gr(ess(MaskSkin|Bar(Mode|Skin|Direction|LabelPlacement|AutomationImpl)?|TrackSkin|IndeterminateSkin)|ammaticSkin))|eloader))|E(dgeMetrics|ventPriority|ffect(Manager|TargetFilter|Instance|Event)?|lastic|rrorMessage|xponential|mailValidator)|V(Rule|Box|i(deo(Display(AutomationImpl)?|E(vent|rror))|ewStack(AutomationImpl)?)|S(crollBar|lider)|DividedBox|alidat(ionResult(Event)?|or))|Qu(intic|a(dratic|lifiedResourceManager|rtic))|F(ile(System(SizeDisplayMode|HistoryButton|ComboBox|Tree|DataGrid|EnumerationMode|List)|Event)|o(ntAsset|cusManager|rm(Heading|Item(Direction|Label|AutomationImpl)?|atter|AutomationImpl)?)|lex(Mo(useEvent|vieClip)|Bitmap|S(hape|impleButton|prite)|HTMLLoader|Native(Menu(Event)?|WindowBoundsEvent)|C(ontentHolder(AutomationImpl)?|lient)|TextField|PrintJob(ScaleType)?|Event|Version)|a(de(Instance)?|ult(Event)?))|W(i(ndow(RestoreButtonSkin|M(inimizeButtonSkin|aximizeButtonSkin)|Background|CloseButtonSkin|ed(SystemManager|Application))?|pe(Right(Instance)?|Down(Instance)?|Up(Instance)?|Left(Instance)?))|SDLBinding|e(dgeItemRenderer|bService))|L(i(st(RowInfo|Base(Se(ekPending|lectionData)|ContentHolder(AutomationImpl)?|AutomationImpl)?|CollectionView|Item(Renderer(AutomationImpl)?|SelectEvent|DragProxy)|D(ata|ropIndicator)|Event(Reason)?|AutomationImpl)?|n(e(Renderer|Series(RenderData|Segment|Item|AutomationImpl)?|Chart|ar(Gradient(Stroke)?|Axis)?|FormattedTarget)|k(B(utton(Skin)?|ar(AutomationImpl)?)|Separator)))|o(cale|ad(er(Config|Util)|Event)|g(Event(Level)?|Logger|Axis)?)|egend(MouseEvent|Item(AutomationImpl)?|Data|AutomationImpl)?|a(yout(Manager|Container)|bel(AutomationImpl)?))|A(sync(Re(sponder|quest)|Message|Token)|nimateProperty(Instance)?|c(cordion(Header(Skin)?|AutomationImpl)?|ti(onEffectInstance|vatorSkin)|knowledgeMessage)|MFChannel|d(d(Child(Action(Instance)?)?|ItemAction(Instance)?)|vanced(DataGrid(Renderer(Description|Provider)|GroupItemRenderer(AutomationImpl)?|Base(SelectionData|Ex(AutomationImpl)?)?|SortItemRenderer|Header(Renderer|ShiftEvent|HorizontalSeparator|Info)|Column(Group)?|Item(Renderer(AutomationImpl)?|SelectEvent)|DragProxy|Event(Reason)?|ListData|AutomationImpl)?|ListBase(AutomationImpl)?))|utomation(Re(cordEvent|playEvent)|ID(Part)?|DragEvent(WithPositionInfo)?|E(vent|rror))?|IREvent|pplication(ControlBar|TitleBarBackgroundSkin|AutomationImpl)?|verageAggregator|lert(FormAutomationImpl|AutomationImpl)?|r(ea(Renderer|Se(t|ries(RenderData|Item|AutomationImpl)?)|Chart)|ray(Collection|Util))|xis(Renderer(AutomationImpl)?|Base|Label(Set)?)|bstract(Message|Service|Consumer|Target|Invoker|Operation|Producer|Event|WebService)))\\b',
          name: 'support.class.mx.actionscript.3'
        }
      ]
    },
    'support-classes-top-level': {
      patterns: [
        {
          match:
            '\\b(R(e(ferenceError|gExp)|angeError)|XML(List)?|Math|Boolean|int|S(yntaxError|tring|ecurityError)|N(umber|amespace)|Class|uint|TypeError|Object|D(efinitionError|ate)|URIError|E(valError|rror)|arguments|VerifyError|QName|Function|Ar(ray|gumentError))\\b',
          name: 'support.class.top-level.actionscript.3'
        }
      ]
    },
    variables: {
      patterns: [
        {match: '\\b(this|super)\\b', name: 'variable.language.actionscript.3'},
        {
          match: '((\\$|\\b_)\\w+?)\\b',
          name: 'variable.language.private.actionscript.3'
        }
      ]
    },
    'variables-local': {name: 'meta.variable-definition.actionscript.3'},
    wildcard: {match: '\\*', name: 'storage.type.wildcard.actionscript.3'}
  },
  scopeName: 'source.actionscript.3'
}

export default grammar
