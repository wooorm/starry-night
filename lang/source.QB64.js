// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/QB64Official/vscode>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: [
    'quickbasic',
    'qb',
    'qbasic',
    'qb64',
    'classic-qbasic',
    'classic-quickbasic'
  ],
  patterns: [
    {match: '\\n', name: 'meta.ending-space'},
    {include: '#round-brackets'},
    {
      begin: '^(?=\\t)',
      end: '(?=[^\\t])',
      name: 'meta.leading-space',
      patterns: [
        {
          captures: {
            1: {name: 'meta.odd-tab.tabs'},
            2: {name: 'meta.even-tab.tabs'}
          },
          match: '(\\t)(\\t)?'
        }
      ]
    },
    {
      begin: '^(?= )',
      end: '(?=[^ ])',
      name: 'meta.leading-space',
      patterns: [
        {
          captures: {
            1: {name: 'meta.odd-tab.spaces'},
            2: {name: 'meta.even-tab.spaces'}
          },
          match: '(  )(  )?'
        }
      ]
    },
    {
      captures: {
        1: {name: 'storage.type.function.QB64'},
        2: {name: 'entity.name.function.QB64'},
        3: {name: 'punctuation.definition.parameters.QB64'},
        4: {name: 'variable.parameter.function.QB64'},
        5: {name: 'punctuation.definition.parameters.QB64'}
      },
      match:
        '^\\s*((?i:function|sub))\\s*([a-zA-Z_]\\w*)\\s*(\\()([^)]*)(\\)).*\\n?',
      name: 'meta.function.QB64'
    },
    {
      match:
        '^\\\\s*((function|sub|FUNCTION|SUB|Function|Sub|fUNCTION|sUB)\\\\s+)([a-zA-Z_]\\\\w*)',
      name: 'userfunctions.QB64'
    },
    {match: '(?i:\\s*\\b(assert)\\b\\s*)', name: 'debug.QB64'},
    {
      begin: "(^[ \\t]+)?(?='|rem|REM|Rem|rEm|reM|rEM|ReM)",
      beginCaptures: {1: {name: 'punctuation.whitespace.comment.leading.QB64'}},
      end: '(?!\\G)',
      patterns: [
        {
          begin: "'|",
          beginCaptures: {0: {name: 'punctuation.definition.comment.QB64'}},
          end: '\\n',
          name: 'comment.line.apostrophe.QB64'
        }
      ]
    },
    {
      match:
        '(?i:\\b(?!open\\s)(If|Then|Else|ElseIf|Else If|End If|Not|Or|And|Xor|Mod|While|Wend|For|Step|To|Each|Case|Select|End Select|Return|Continue|_Continue|Do|Until|Loop|Next|With|Exit Do|Exit For|Exit Function|Exit Property|Exit Sub|IIf|Limit|_Limit|Delay|_Delay|sleep|Key|Off)\\b)',
      name: 'keyword.control.QB64'
    },
    {
      captures: {
        1: {name: 'storage.type.QB64'},
        2: {name: 'variable.other.dim.QB64'},
        3: {name: 'meta.separator.comma.QB64'},
        4: {name: 'graphics.QB64'},
        5: {name: 'sound.QB64'}
      },
      match:
        '(?i:(dim shared?|dim|redim))\\s*(?:(\\b[a-zA-Z_x7f-xff][a-zA-Z0-9_x7f-xff]*?\\b)\\s*(,?))',
      name: 'variable.other.dim.QB64'
    },
    {
      match:
        '(?i:\\s*\\b(Shell|_Hide|Hide|Command|_Startdir|_CONSOLE OFF|CONSOLE OFF|_CONSOLE ON|CONSOLE On|echo|_echo|_DEST _CONSOLE|DEST CONSOLE|cv|_cv|startdir|Date|Time|on timer|_FREETIMER|_commandcount|commandcountCall|Screenhide|_Screenhide|_screenshow|_screenmove|screenmove|screen|screenshow|_screenmove|screenmove|os|_os|title|_title|_CONSOLETITLE|CONSOLETITLE|_newimage|newimage|DECLARE|DEF|SEG|resume|Rest|Timer|gosub|call|DEFINT|Cls|Const|As|_PRESERVE|PRESERVE|Function|End Function|Sub|End Sub|Title|Type|End Type|Randomize|option base|Print|Color|On Error Resume Next|On Error GoTo|Error|_errormessage|errormessage|errorline|_errorline|_INCLERRORFILE|INCLERRORFILE|Goto|FileExists|_FileExists|String|Integer|Long|_INTEGER64|INTEGER64|_Bit|Bit|_BYTE|BYTE|SINGLE|DOUBLE|_FLOAT|FLOAT|_OFFSET|OFFSET|_UNSIGNED|UNSIGNED|_MEM|MEM|LTrim|RTrim|Trim|Right|Left|LCase|UCase|Locate|Str|CVL|MKL|MKI|_mk|mk|CVI|Val|Mid|abs|_keyclear|keyclear)\\b\\s*)',
      name: 'storage.type.QB64'
    },
    {
      match:
        '(?i:\\s*\\b(ByVal|Dynamic|Library|Inkey|Name|Open|For|Eof|Poke|Data|Close|Get|Read|Input|Random|Kill|Put|Write|Append|Output|FreeFile|Files|_openhost|openhost|_OPENCLIENT|_openconnection|openconnection|OPENCLIENT|_CONNECTED|CONNECTED|_CONNECTIONADDRESS|CONNECTIONADDRESS|_direxists|direxists|_fileexists|fileexists|mkdir|rmdir|_cwd|cwd)\\b\\s*)',
      name: 'storage.type.QB64'
    },
    {
      match: '(?i:\\b(End|Stop|System|Environ|_ENVIRONCOUNT|ENVIRONCOUNT)\\b)',
      name: 'storage.type.QB64'
    },
    {match: '(?i:\\b(_assert)\\b)', name: 'debug.QB64'},
    {match: '(\\b(?:TODO|FIXME|FIXIT):?\\b)', name: 'todo.QB64'},
    {
      match:
        "(?i:\\b(REM|'|$DYNAMIC|$STATIC|Option _Explicit|option _explicitarray|option explicitarray|$RESIZE:|$ASSERTS|$Noprefix|$CHECKING|$COLOR|$CONSOLE|$DEBUG|$ERROR|$EXEICON|$LET|$IF|$ELSEIF|$END IF|$SCREENHIDE|$SCREENSHOW|$VIRTUALKEYBOARD|$VERSIONINFO:Comments|$VERSIONINFO:CompanyName|$VERSIONINFO:FileDescription|$VERSIONINFO:FileVersion|$VERSIONINFO:InternalName|$VERSIONINFO:LegalCopyright|$VERSIONINFO:LegalTrademarks|$VERSIONINFO:OriginalFilename|$VERSIONINFO:ProductName|$VERSIONINFO:ProductVersion|$VERSIONINFO:Web)\\b)",
      name: 'metacommand.QB64'
    },
    {
      match:
        '(?i:\\b(beep|play|sound|sndbal|sndclose|sndcopy|sndgetpos|sndlen|sndlimit|sndloop|sndopen|sndopenraw|sndpause|sndpaused|sndplay|sndplaycopy|sndplayfile|sndplaying|sndrate|sndraw|sndrawdone|sndrawlen|sndsetpos|sndstop|sndvol)\\b)',
      name: 'sound.QB64'
    },
    {
      match:
        '(?i:\\b(_sndbal|_sndclose|_sndcopy|_sndgetpos|_sndlen|_sndlimit|_sndloop|_sndopen|_sndopenraw|_sndpause|_sndpaused|_sndplay|_sndplaycopy|_sndplayfile|_sndplaying|_sndrate|_sndraw|_sndrawdone|_sndrawlen|_sndsetpos|_sndstop|_sndvol)\\b)',
      name: 'sound.QB64'
    },
    {
      match:
        '(?i:\\b(line|circle|point|glrender|glaccum|glalphafunc|glaretexturesresident|glarrayelement|glbegin|glbindtexture|glbitmap|glblendfunc|glcalllist|glcalllists|glclear|glclearaccum|glclearcolor|glcleardepth|glclearindex|glclearstencil|glclipplane|glcolor3b|glcolor3bv|glcolor3d|glcolor3dv|glcolor3f|glcolor3fv|glcolor3i|glcolor3iv|glcolor3s|glcolor3sv|glcolor3ub|glcolor3ubv|glcolor3ui|glcolor3uiv|glcolor3us|glcolor3usv|glcolor4b|glcolor4bv|glcolor4d|glcolor4dv|glcolor4f|glcolor4fv|glcolor4i|glcolor4iv|glcolor4s|glcolor4sv|glcolor4ub|glcolor4ubv|glcolor4ui|glcolor4uiv|glcolor4us|glcolor4usv|glcolormask|glcolormaterial|glcolorpointer|glcopypixels|glcopyteximage1d|glcopyteximage2d|glcopytexsubimage1d|glcopytexsubimage2d|glcullface|gldeletelists|gldeletetextures|gldepthfunc|gldepthmask|gldepthrange|gldisable|gldisableclientstate|gldrawarrays|gldrawbuffer|gldrawelements|gldrawpixels|gledgeflag|gledgeflagpointer|gledgeflagv|glenable|glenableclientstate|glend|glendlist|glevalcoord1d|glevalcoord1dv|glevalcoord1f|glevalcoord1fv|glevalcoord2d|glevalcoord2dv|glevalcoord2f|glevalcoord2fv|glevalmesh1|glevalmesh2|glevalpoint1|glevalpoint2|glfeedbackbuffer|glfinish|glflush|glfogf|glfogfv|glfogi|glfogiv|glfrontface|glfrustum|glgenlists|glgentextures|glgetbooleanv|glgetclipplane|glgetdoublev|glgeterror|glgetfloatv|glgetintegerv|glgetlightfv|glgetlightiv|glgetmapdv|glgetmapfv|glgetmapiv|glgetmaterialfv|glgetmaterialiv|glgetpixelmapfv|glgetpixelmapuiv|glgetpixelmapusv|glgetpointerv|glgetpolygonstipple|glgetstring|glgettexenvfv|glgettexenviv|glgettexgendv|glgettexgenfv|glgettexgeniv|glgetteximage|glgettexlevelparameterfv|glgettexlevelparameteriv|glgettexparameterfv|glgettexparameteriv|glhint|glindexmask|glindexpointer|glindexd|glindexdv|glindexf|glindexfv|glindexi|glindexiv|glindexs|glindexsv|glindexub|glindexubv|glinitnames|glinterleavedarrays|glisenabled|glislist|glistexture|gllightmodelf|gllightmodelfv|gllightmodeli|gllightmodeliv|gllightf|gllightfv|gllighti|gllightiv|gllinestipple|gllinewidth|gllistbase|glloadidentity|glloadmatrixd|glloadmatrixf|glloadname|gllogicop|glmap1d|glmap1f|glmap2d|glmap2f|glmapgrid1d|glmapgrid1f|glmapgrid2d|glmapgrid2f|glmaterialf|glmaterialfv|glmateriali|glmaterialiv|glmatrixmode|glmultmatrixd|glmultmatrixf|glnewlist|glnormal3b|glnormal3bv|glnormal3d|glnormal3dv|glnormal3f|glnormal3fv|glnormal3i|glnormal3iv|glnormal3s|glnormal3sv|glnormalpointer|glortho|glpassthrough|glpixelmapfv|glpixelmapuiv|glpixelmapusv|glpixelstoref|glpixelstorei|glpixeltransferf|glpixeltransferi|glpixelzoom|glpointsize|glpolygonmode|glpolygonoffset|glpolygonstipple|glpopattrib|glpopclientattrib|glpopmatrix|glpopname|glprioritizetextures|glpushattrib|glpushclientattrib|glpushmatrix|glpushname|glrasterpos2d|glrasterpos2dv|glrasterpos2f|glrasterpos2fv|glrasterpos2i|glrasterpos2iv|glrasterpos2s|glrasterpos2sv|glrasterpos3d|glrasterpos3dv|glrasterpos3f|glrasterpos3fv|glrasterpos3i|glrasterpos3iv|glrasterpos3s|glrasterpos3sv|glrasterpos4d|glrasterpos4dv|glrasterpos4f|glrasterpos4fv|glrasterpos4i|glrasterpos4iv|glrasterpos4s|glrasterpos4sv|glreadbuffer|glreadpixels|glrectd|glrectdv|glrectf|glrectfv|glrecti|glrectiv|glrects|glrectsv|glrendermode|glrotated|glrotatef|glscaled|glscalef|glscissor|glselectbuffer|glshademodel|glstencilfunc|glstencilmask|glstencilop|gltexcoord1d|gltexcoord1dv|gltexcoord1f|gltexcoord1fv|gltexcoord1i|gltexcoord1iv|gltexcoord1s|gltexcoord1sv|gltexcoord2d|gltexcoord2dv|gltexcoord2f|gltexcoord2fv|gltexcoord2i|gltexcoord2iv|gltexcoord2s|gltexcoord2sv|gltexcoord3d|gltexcoord3dv|gltexcoord3f|gltexcoord3fv|gltexcoord3i|gltexcoord3iv|gltexcoord3s|gltexcoord3sv|gltexcoord4d|gltexcoord4dv|gltexcoord4f|gltexcoord4fv|gltexcoord4i|gltexcoord4iv|gltexcoord4s|gltexcoord4sv|gltexcoordpointer|gltexenvf|gltexenvfv|gltexenvi|gltexenviv|gltexgend|gltexgendv|gltexgenf|gltexgenfv|gltexgeni|gltexgeniv|glteximage1d|glteximage2d|gltexparameterf|gltexparameterfv|gltexparameteri|gltexparameteriv|gltexsubimage1d|gltexsubimage2d|gltranslated|gltranslatef|glvertex2d|glvertex2dv|glvertex2f|glvertex2fv|glvertex2i|glvertex2iv|glvertex2s|glvertex2sv|glvertex3d|glvertex3dv|glvertex3f|glvertex3fv|glvertex3i|glvertex3iv|glvertex3s|glvertex3sv|glvertex4d|glvertex4dv|glvertex4f|glvertex4fv|glvertex4i|glvertex4iv|glvertex4s|glvertex4sv|glvertexpointer|glviewport)\\b)',
      name: 'graphics.QB64'
    },
    {
      match:
        '(?i:\\b(_glrender|_glaccum|_glalphafunc|_glaretexturesresident|_glarrayelement|_glbegin|_glbindtexture|_glbitmap|_glblendfunc|_glcalllist|_glcalllists|_glclear|_glclearaccum|_glclearcolor|_glcleardepth|_glclearindex|_glclearstencil|_glclipplane|_glcolor3b|_glcolor3bv|_glcolor3d|_glcolor3dv|_glcolor3f|_glcolor3fv|_glcolor3i|_glcolor3iv|_glcolor3s|_glcolor3sv|_glcolor3ub|_glcolor3ubv|_glcolor3ui|_glcolor3uiv|_glcolor3us|_glcolor3usv|_glcolor4b|_glcolor4bv|_glcolor4d|_glcolor4dv|_glcolor4f|_glcolor4fv|_glcolor4i|_glcolor4iv|_glcolor4s|_glcolor4sv|_glcolor4ub|_glcolor4ubv|_glcolor4ui|_glcolor4uiv|_glcolor4us|_glcolor4usv|_glcolormask|_glcolormaterial|_glcolorpointer|_glcopypixels|_glcopyteximage1d|_glcopyteximage2d|_glcopytexsubimage1d|_glcopytexsubimage2d|_glcullface|_gldeletelists|_gldeletetextures|_gldepthfunc|_gldepthmask|_gldepthrange|_gldisable|_gldisableclientstate|_gldrawarrays|_gldrawbuffer|_gldrawelements|_gldrawpixels|_gledgeflag|_gledgeflagpointer|_gledgeflagv|_glenable|_glenableclientstate|_glend|_glendlist|_glevalcoord1d|_glevalcoord1dv|_glevalcoord1f|_glevalcoord1fv|_glevalcoord2d|_glevalcoord2dv|_glevalcoord2f|_glevalcoord2fv|_glevalmesh1|_glevalmesh2|_glevalpoint1|_glevalpoint2|_glfeedbackbuffer|_glfinish|_glflush|_glfogf|_glfogfv|_glfogi|_glfogiv|_glfrontface|_glfrustum|_glgenlists|_glgentextures|_glgetbooleanv|_glgetclipplane|_glgetdoublev|_glgeterror|_glgetfloatv|_glgetintegerv|_glgetlightfv|_glgetlightiv|_glgetmapdv|_glgetmapfv|_glgetmapiv|_glgetmaterialfv|_glgetmaterialiv|_glgetpixelmapfv|_glgetpixelmapuiv|_glgetpixelmapusv|_glgetpointerv|_glgetpolygonstipple|_glgetstring|_glgettexenvfv|_glgettexenviv|_glgettexgendv|_glgettexgenfv|_glgettexgeniv|_glgetteximage|_glgettexlevelparameterfv|_glgettexlevelparameteriv|_glgettexparameterfv|_glgettexparameteriv|_glhint|_glindexmask|_glindexpointer|_glindexd|_glindexdv|_glindexf|_glindexfv|_glindexi|_glindexiv|_glindexs|_glindexsv|_glindexub|_glindexubv|_glinitnames|_glinterleavedarrays|_glisenabled|_glislist|_glistexture|_gllightmodelf|_gllightmodelfv|_gllightmodeli|_gllightmodeliv|_gllightf|_gllightfv|_gllighti|_gllightiv|_gllinestipple|_gllinewidth|_gllistbase|_glloadidentity|_glloadmatrixd|_glloadmatrixf|_glloadname|_gllogicop|_glmap1d|_glmap1f|_glmap2d|_glmap2f|_glmapgrid1d|_glmapgrid1f|_glmapgrid2d|_glmapgrid2f|_glmaterialf|_glmaterialfv|_glmateriali|_glmaterialiv|_glmatrixmode|_glmultmatrixd|_glmultmatrixf|_glnewlist|_glnormal3b|_glnormal3bv|_glnormal3d|_glnormal3dv|_glnormal3f|_glnormal3fv|_glnormal3i|_glnormal3iv|_glnormal3s|_glnormal3sv|_glnormalpointer|_glortho|_glpassthrough|_glpixelmapfv|_glpixelmapuiv|_glpixelmapusv|_glpixelstoref|_glpixelstorei|_glpixeltransferf|_glpixeltransferi|_glpixelzoom|_glpointsize|_glpolygonmode|_glpolygonoffset|_glpolygonstipple|_glpopattrib|_glpopclientattrib|_glpopmatrix|_glpopname|_glprioritizetextures|_glpushattrib|_glpushclientattrib|_glpushmatrix|_glpushname|_glrasterpos2d|_glrasterpos2dv|_glrasterpos2f|_glrasterpos2fv|_glrasterpos2i|_glrasterpos2iv|_glrasterpos2s|_glrasterpos2sv|_glrasterpos3d|_glrasterpos3dv|_glrasterpos3f|_glrasterpos3fv|_glrasterpos3i|_glrasterpos3iv|_glrasterpos3s|_glrasterpos3sv|_glrasterpos4d|_glrasterpos4dv|_glrasterpos4f|_glrasterpos4fv|_glrasterpos4i|_glrasterpos4iv|_glrasterpos4s|_glrasterpos4sv|_glreadbuffer|_glreadpixels|_glrectd|_glrectdv|_glrectf|_glrectfv|_glrecti|_glrectiv|_glrects|_glrectsv|_glrendermode|_glrotated|_glrotatef|_glscaled|_glscalef|_glscissor|_glselectbuffer|_glshademodel|_glstencilfunc|_glstencilmask|_glstencilop|_gltexcoord1d|_gltexcoord1dv|_gltexcoord1f|_gltexcoord1fv|_gltexcoord1i|_gltexcoord1iv|_gltexcoord1s|_gltexcoord1sv|_gltexcoord2d|_gltexcoord2dv|_gltexcoord2f|_gltexcoord2fv|_gltexcoord2i|_gltexcoord2iv|_gltexcoord2s|_gltexcoord2sv|_gltexcoord3d|_gltexcoord3dv|_gltexcoord3f|_gltexcoord3fv|_gltexcoord3i|_gltexcoord3iv|_gltexcoord3s|_gltexcoord3sv|_gltexcoord4d|_gltexcoord4dv|_gltexcoord4f|_gltexcoord4fv|_gltexcoord4i|_gltexcoord4iv|_gltexcoord4s|_gltexcoord4sv|_gltexcoordpointer|_gltexenvf|_gltexenvfv|_gltexenvi|_gltexenviv|_gltexgend|_gltexgendv|_gltexgenf|_gltexgenfv|_gltexgeni|_gltexgeniv|_glteximage1d|_glteximage2d|_gltexparameterf|_gltexparameterfv|_gltexparameteri|_gltexparameteriv|_gltexsubimage1d|_gltexsubimage2d|_gltranslated|_gltranslatef|_glvertex2d|_glvertex2dv|_glvertex2f|_glvertex2fv|_glvertex2i|_glvertex2iv|_glvertex2s|_glvertex2sv|_glvertex3d|_glvertex3dv|_glvertex3f|_glvertex3fv|_glvertex3i|_glvertex3iv|_glvertex3s|_glvertex3sv|_glvertex4d|_glvertex4dv|_glvertex4f|_glvertex4fv|_glvertex4i|_glvertex4iv|_glvertex4s|_glvertex4sv|_glvertexpointer|_glviewport)\\b)',
      name: 'graphics.QB64'
    },
    {
      match:
        '(?i:\\b(Array|Add|Asc|Atn|CBool|CByte|CCur|CDate|CDbl|Chr|CInt|CLng|Conversions|Cos|CSng|CStr|Date|DateAdd|DateDiff|DatePart|DateSerial|DateValue|Day|Derived|Math|Escape|Eval|Exp|Filter|FormatCurrency|FormatDateTime|FormatNumber|FormatPercent|GetLocale|GetRef|Hex|Hour|InputBox|InStr|InStrRev|Int|Fix|IsDate|IsNull|IsNumeric|Item|Items|Join|Keys|LBound|LCase|Left|Len|LoadPicture|Log|Maths|Mid|Minute|Month|MonthName|Oct|Rgb|_Rgb|_rgba|rgba|Right|Rnd|Round|ScriptEngine|ScriptEngineBuildVersion|ScriptEngineMajorVersion|ScriptEngineMinorVersion|Second|SetLocale|Sgn|Sin|Space|Sqr|StrComp|String|StrReverse|Tan|Time|TimeSerial|TimeValue|TypeName|UBound|UCase|Unescape|VarType|Weekday|WeekdayName|Year)\\b)',
      name: 'storage.type.QB64'
    },
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.QB64'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.QB64'}},
      name: 'string.quoted.double.QB64',
      patterns: [
        {match: '""', name: 'constant.character.escape.apostrophe.QB64'}
      ]
    },
    {
      captures: {
        1: {name: 'punctuation.definition.variable.QB64'},
        2: {name: 'support.function.QB64'}
      },
      match: '(\\$)[a-zA-Z_x7f-xff][a-zA-Z0-9_x7f-xff]*?\\b\\s*',
      name: 'variable.other.QB64'
    },
    {
      match:
        '(?i:\\b(Lock|Unlock|SetAbort|SetComplete|BinaryRead|AddHeader|AppendToLog|BinaryWrite|Clear|End|Flush|Redirect|HTMLEncode|MapPath|URLEncode|Abandon|Convert|Regex)\\b)',
      name: 'support.function.QB64'
    },
    {match: '\\b\\w+\\s+as\\s+\\w+\b(?!\\s*\\))', name: 'support.type.QB64'},
    {
      match:
        '-?\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)(L|l|UL|ul|u|U|F|f)?\\b',
      name: 'constant.numeric.QB64'
    },
    {
      captures: {1: {name: 'entity.name.function.QB64'}},
      match: '(?i:(\\b[a-zA-Z_x7f-xff][a-zA-Z0-9_x7f-xff]*?\\b)(?=\\(\\)?))',
      name: 'support.function.QB64'
    },
    {
      match:
        '(?i:((?<=(\\+|=|-|\\&|\\\\|/|<|>|\\(|,))\\s*\\b([a-zA-Z_x7f-xff][a-zA-Z0-9_x7f-xff]*?)\\b(?!(\\(|\\.))|\\b([a-zA-Z_x7f-xff][a-zA-Z0-9_x7f-xff]*?)\\b(?=\\s*(\\+|=|-|\\&|\\\\|/|<|>|\\(|\\)))))',
      name: 'variable.other.QB64'
    }
  ],
  repository: {
    'round-brackets': {
      begin: '\\(',
      beginCaptures: {
        0: {name: 'punctuation.section.round-brackets.begin.QB64'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.section.round-brackets.end.QB64'}},
      name: 'meta.round-brackets',
      patterns: [{include: 'source.QB64'}]
    }
  },
  scopeName: 'source.QB64'
}

export default grammar
