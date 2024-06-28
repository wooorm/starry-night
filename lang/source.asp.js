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
      captures: {
        1: {name: 'storage.type.function.asp'},
        2: {name: 'entity.name.function.asp'},
        3: {name: 'punctuation.definition.parameters.asp'},
        4: {name: 'variable.parameter.function.asp'},
        5: {name: 'punctuation.definition.parameters.asp'}
      },
      match:
        '^\\s*((?i:function|sub))\\s*([a-zA-Z_]\\w*)\\s*(\\()([^)]*)(\\)).*\\n?',
      name: 'meta.function.asp'
    },
    {
      begin: "(^[ \\t]+)?(?=')",
      beginCaptures: {1: {name: 'punctuation.whitespace.comment.leading.asp'}},
      end: '(?!\\G)',
      patterns: [
        {
          begin: "'",
          beginCaptures: {0: {name: 'punctuation.definition.comment.asp'}},
          end: '\\n',
          name: 'comment.line.apostrophe.asp'
        }
      ]
    },
    {
      begin: '(^[ \\t]+)?(?=REM )',
      beginCaptures: {1: {name: 'punctuation.whitespace.comment.leading.asp'}},
      end: '(?!\\G)',
      patterns: [
        {
          begin: 'REM ',
          beginCaptures: {0: {name: 'punctuation.definition.comment.asp'}},
          end: '\\n',
          name: 'comment.line.rem.asp'
        }
      ]
    },
    {
      match:
        '(?i:\\b(If|Then|Else|ElseIf|End If|While|Wend|For|To|Each|In|Step|Case|Select|End Select|Return|Continue|Do|Until|Loop|Next|With|Exit Do|Exit For|Exit Function|Exit Property|Exit Sub)\\b)',
      name: 'keyword.control.asp'
    },
    {
      match: '=|>=|<|>|<|<>|\\+|-|\\*|\\^|&|\\b(?i:(Mod|And|Not|Or|Xor|Is))\\b',
      name: 'keyword.operator.asp'
    },
    {
      match:
        '(?i:\\b(Call|Class|Const|Dim|Redim|Function|Sub|Property|End Property|End sub|End Function|Set|Let|Get|New|Randomize|Option Explicit|On Error Resume Next|On Error GoTo)\\b)',
      name: 'storage.type.asp'
    },
    {
      match: '(?i:\\b(Private|Public|Default)\\b)',
      name: 'storage.modifier.asp'
    },
    {
      match: '(?i:\\b(Empty|False|Nothing|Null|True)\\b)',
      name: 'constant.language.asp'
    },
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.asp'}},
      end: '"(?!")',
      endCaptures: {0: {name: 'punctuation.definition.string.end.asp'}},
      name: 'string.quoted.double.asp',
      patterns: [
        {match: '""', name: 'constant.character.escape.apostrophe.asp'}
      ]
    },
    {
      captures: {1: {name: 'punctuation.definition.variable.asp'}},
      match: '(\\$)[a-zA-Z_x7f-xff][a-zA-Z0-9_x7f-xff]*?\\b',
      name: 'variable.other.asp'
    },
    {
      match:
        '(?i:\\b(Application|ObjectContext|Request|Response|Server|Session)\\b)',
      name: 'support.class.asp'
    },
    {
      match:
        '(?i:\\b(Contents|StaticObjects|ClientCertificate|Cookies|Form|QueryString|ServerVariables)\\b)',
      name: 'support.class.collection.asp'
    },
    {
      match:
        '(?i:\\b(TotalBytes|Buffer|CacheControl|Charset|ContentType|Expires|ExpiresAbsolute|IsClientConnected|PICS|Status|ScriptTimeout|CodePage|LCID|SessionID|Timeout)\\b)',
      name: 'support.constant.asp'
    },
    {
      match:
        '(?i:\\b(Lock|Unlock|SetAbort|SetComplete|BianryRead|AddHeader|AppendToLog|BinaryWrite|Clear|End|Flush|Redirect|Write|CreateObject|HTMLEncode|MapPath|URLEncode|Abandon)\\b)',
      name: 'support.function.asp'
    },
    {
      match:
        '(?i:\\b(Application_OnEnd|Application_OnStart|OnTransactionAbort|OnTransactionCommit|Session_OnEnd|Session_OnStart|Class_Initialize|Class_Terminate)\\b)',
      name: 'support.function.event.asp'
    },
    {
      match:
        '(?i:\\b(Array|Add|Asc|Atn|CBool|CByte|CCur|CDate|CDbl|Chr|CInt|CLng|Conversions|Cos|CreateObject|CSng|CStr|Date|DateAdd|DateDiff|DatePart|DateSerial|DateValue|Day|Derived|Math|Escape|Eval|Exists|Exp|Filter|FormatCurrency|FormatDateTime|FormatNumber|FormatPercent|GetLocale|GetObject|GetRef|Hex|Hour|InputBox|InStr|InStrRev|Int|Fix|IsArray|IsDate|IsEmpty|IsNull|IsNumeric|IsObject|Item|Items|Join|Keys|LBound|LCase|Left|Len|LoadPicture|Log|LTrim|RTrim|Trim|Maths|Mid|Minute|Month|MonthName|MsgBox|Now|Oct|Remove|RemoveAll|Replace|RGB|Right|Rnd|Round|ScriptEngine|ScriptEngineBuildVersion|ScriptEngineMajorVersion|ScriptEngineMinorVersion|Second|SetLocale|Sgn|Sin|Space|Split|Sqr|StrComp|String|StrReverse|Tan|Time|Timer|TimeSerial|TimeValue|TypeName|UBound|UCase|Unescape|VarType|Weekday|WeekdayName|Year)\\b)',
      name: 'support.function.vb.asp'
    },
    {
      match:
        '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)(L|l|UL|ul|u|U|F|f)?\\b',
      name: 'constant.numeric.asp'
    },
    {
      match:
        '(?i:\\b(vbtrue|vbfalse|vbcr|vbcrlf|vbformfeed|vblf|vbnewline|vbnullchar|vbnullstring|vbtab|vbverticaltab|vbbinarycompare|vbtextcomparevbsunday|vbmonday|vbtuesday|vbwednesday|vbthursday|vbfriday|vbsaturday|vbusesystemdayofweek|vbfirstjan1|vbfirstfourdays|vbfirstfullweek|vbgeneraldate|vblongdate|vbshortdate|vblongtime|vbshorttime|vbobjecterror|vbEmpty|vbNull|vbInteger|vbLong|vbSingle|vbDouble|vbCurrency|vbDate|vbString|vbObject|vbError|vbBoolean|vbVariant|vbDataObject|vbDecimal|vbByte|vbArray)\\b)',
      name: 'support.type.vb.asp'
    }
  ],
  scopeName: 'source.asp'
}

export default grammar
