// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.brs'],
  names: ['brightscript'],
  patterns: [
    {include: '#functions'},
    {include: '#program_statements'},
    {include: '#operators'},
    {include: '#support_functions'},
    {include: '#storage_types'},
    {include: '#literals'},
    {include: '#constant_numeric'},
    {
      captures: {1: {name: 'punctuation.definition.comment.brightscript'}},
      match: "(').*$\\n?",
      name: 'comment.line.apostrophe.brightscript'
    },
    {
      captures: {1: {name: 'punctuation.definition.comment.brightscript'}},
      match: '^\\s*?(?i:rem\\s).*$\\n?',
      name: 'comment.line.rem.brightscript'
    },
    {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.brightscript',
      patterns: [
        {match: '\\\\.', name: 'constant.character.escape.brightscript'},
        {include: '#class_roku_builtin'}
      ]
    }
  ],
  repository: {
    class: {name: 'meta.class.brightscript'},
    class_roku_builtin: {
      match:
        '(?i:\\bro(R(ss(Parser|Article)|e(sourceManager|ctangle|ad(File|WriteFile)|gistry(Section)?))|G(pio(Button|ControlPort)|lobal)|XML(Element|List)|MessagePort|B(yteArray|oolean|r(Sub|ightPackage))|S(ystemTime|t(orageInfo|ring( )?)|erialPort( )?)|NetworkConfiguration|C(ontrol(Down( )?|Up|Port)|ecInterface|lockWidget|reateFile)|T(imer|ouchScreen( )?|ext(Field|Widget))|I(RRemote( )?|n(t|valid)|mage(Player|Widget))|D(eviceInfo( )?|at(eTime|agram(Receiver|Sender)))|Url(Transfer|Event)|Video(Mode|Input|Player|Event)|Keyboard(Press( )?| )?|Quadravox(Button( )?|SNS5( )?)|Float|List|A(ssociativeArray|udio(Player|Event)|ppendFile|rray))\\b)',
      name: 'support.class.brightscript'
    },
    constant_numeric: {
      match:
        '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)(L|l|UL|ul|u|U|F|f)?\\b',
      name: 'constant.numeric.brightscript'
    },
    functions: {
      captures: {
        1: {name: 'storage.type.function.brightscript'},
        2: {name: 'entity.name.function.brightscript'},
        3: {name: 'punctuation.definition.parameters.brightscript'},
        4: {name: 'variable.parameter.function.brightscript'},
        5: {name: 'punctuation.definition.parameters.brightscript'}
      },
      match:
        '^\\s*((?i:function|sub))\\s*([a-zA-Z_]\\w*)\\s*(\\()([^)]*)(\\)).*\\n?',
      name: 'meta.function.brightscript'
    },
    literals: {
      match: '(?i:\\b(N(othing|ull)|True|Invalid|Empty|False)\\b)',
      name: 'constant.language.brightscript'
    },
    operators: {
      match: '=|>=|<zz|>|<|<>|\\+|-|\\*|\\/|\\^|&|\\b(?i:(And|Not|Or))\\b',
      name: 'keyword.operator.brightscript'
    },
    program_statements: {
      match:
        '(?i:\\b(s(t(op|ep)|ub)|i(n|f)|t(hen|o)|dim|print|e(nd(if| (sub|f(or|unction)|while))?|lse(if)?|xit (for|while))|f(or( each)?|unction)|as|while|re(turn|m)|goto)?\\b)',
      name: 'keyword.control.brightscript'
    },
    storage_types: {
      match:
        '(?i:\\b(string|in(te(rface|ger)|valid)|object|double|float|b(oolean|rsub))\\b)',
      name: 'storage.type.brightscript'
    },
    support_builtin_functions: {
      match:
        '(?i:\\b(GetLastRun(RuntimeError|CompileError)|R(nd|un)|Box|Type)\\b)',
      name: 'support.function.brightscript'
    },
    support_component_functions: {
      match:
        '(?i:\\b(R(ight|e(set(Index)?|ad(B(yte(IfAvailable)?|lock)|File|Line)?|move(Head|Tail|Index)))|Ge(nXML(Header)?|t(Res(ource|ponse(Headers|Code))|X|M(i(nute|llisecond)|o(nth|de(l)?)|essage)|B(yte(sPerBlock|Array)|o(o(tVersion(Number)?|lean)|dy))|S(t(orageCardInfo|a(ndards|tusByte)|ring(Count)?)|i(zeInMegabytes|gnedByte)|ource(Host|Identity|Port)|ub|ec(tionList|ond)|afe(X|Height|Y|Width))|H(o(stName|ur)|e(ight|ad))|Y(ear)?|N(extArticle|ame(dElements)?)|C(hildElements|ontrols|urrent(Standard|Con(trolValue|fig)|Input))|T(i(tle|me(Server|Zone))|o(String|File)|ext|ail)|I(n(t|dex|puts)|dentity)|ZoneDateTime|D(e(scription|vice(BootCount|Name|U(niqueId|ptime)))|a(y(OfWeek)?|ta))|U(se(dInMegabytes|rData)|tcDateTime)|Ent(ityEncode|ry)|V(ersion(Number)?|alue)|KeyList|F(ileSystemType|loat|a(ilureReason|mily)|reeInMegabytes)|W(holeState|idth)|LocalDateTime|Attributes))|M(id|D5|ap(StereoOutput(Aux)?|DigitalOutput))|Boolean|S(h(ift|ow)|canWiFi|t(op(Clear|Display)?|art|r(i(ng)?)?)|implify|ubtract(Milliseconds|Seconds)|e(nd(RawMessage|B(yte|lock)|Line)?|t(R(ollOverRegion|e(s(ize|olution)|c(tangle|eiveEol)))|X|M(i(n(imumTransferRate|ute)|llisecond)|o(nth|de(CaseSensitive)?)|ultiscreenBezel)|B(yteEventPort|o(olean|dy)|a(ckground(Bitmap|Color)|udRate))|S(t(andard|ring)|ub|e(ndEol|cond)|afeTextRegion)|H(o(stName|ur)|eight)|Y(ear)?|Name|C(hannelVolumes(Aux)?|ontrolValue|ursor(Bitmap|Pos(ition)?))|Time(Server|Zone)?|I(n(t|put)|P4(Gateway|Broadcast|Netmask|Address))|OutputState|D(HCP|omain|e(stination|fault(Mode|Transistion))|a(y(OfWeek)?|te(Time)?))|U(ser(Data|AndPassword)|tcDateTime|rl)|P(o(werSaveMode|rt)|assword|roxy)|E(ntry|cho|ol)|V(iewMode|olume(Aux)?)|F(o(nt|r(egroundColor|groundColor))|l(oat|ashRate))|W(holeState|i(dth|Fi(Passphrase|ESSID)))|L(ineEventPort|o(calDateTime|opMode)|auguage)|Audio(Mode(Aux)?|Stream(Aux)?|Output(Aux)?))|ek(Relative|ToEnd|Absolute)))|H(ide|ead|asAttribute)|N(ormalize|ext)|C(hr|ount|urrentPosition|l(s|ear(Region|Events)?))|T(o(Base64String|HexString|kenize|AsciiString)|estInter(netConnectivity|face)|rim)|I(s(MousePresent|N(ext|ame)|InputActive|Empty|Valid|LittleEndianCPU)|n(str|te(rface|ger)|valid))|Object|D(ynamic|isplay(Preload|File(Ex)?)|o(uble|esExist)|elete)|U(n(shift|pack)|Case)|P(o(st(Message|From(String|File))|p(String(s)?)?)|ush(String)?|eek|lay(StaticImage|File)?|arse(String|File)?|reloadFile(Ex)?)|E(nable(R(ollover|egion)|Cursor|Input|Output)|xists)|Void|F(indIndex|unction|l(oat|ush)|rom(Base64String|HexString|AsciiString))|W(hile|aitMessage|rite(File)?)|L(ookup|e(n|ft))|A(s(ync(GetTo(String|File)|Head|PostFrom(String|File)|Flush)|c)?|tEof|dd(Re(ctangle(Region|_region)|place)|Milliseconds|BodyElement|Seconds|Head(er)?|CircleRegion|Tail|DNSServer|E(vent|lement(WithBody)?)|Attribute)|pp(end(String|File)?|ly)))\\b)',
      name: 'support.function.component.brightscript'
    },
    support_functions: {
      patterns: [
        {include: '#support_builtin_functions'},
        {include: '#support_global_functions'},
        {include: '#support_global_string_functions'},
        {include: '#support_global_math_functions'},
        {include: '#support_component_functions'}
      ]
    },
    support_global_functions: {
      match:
        '(?i:\\b(Re(adAsciiFile|bootSystem)|GetInterface|MatchFiles|Sleep|C(opyFile|reate(Directory|Object))|Delete(Directory|File)|UpTime|FormatDrive|ListDir|W(ait|riteAsciiFile))\\b)',
      name: 'support.function.brightscript'
    },
    support_global_math_functions: {
      match:
        '(?i:\\b(S(in|qr|gn)|C(sng|dbl|os)|Tan|Int|Exp|Fix|Log|A(tn|bs))\\b)',
      name: 'support.function.brightscript'
    },
    support_global_string_functions: {
      match:
        '(?i:\\b(Right|Mid|Str(i(ng(i)?)?)?|Chr|Instr|UCase|Val|Asc|L(Case|e(n|ft)))\\b)',
      name: 'support.function.brightscript'
    }
  },
  scopeName: 'source.brightscript'
}

export default grammar
