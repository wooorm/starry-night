// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.au3'],
  names: ['autoit', 'au3', 'autoit3', 'autoitscript'],
  patterns: [
    {
      match:
        '\\b(?i:and|byref|case|const|continuecase|continueloop|default|dim|do|else|elseif|endfunc|endif|endselect|endswitch|endwith|enum|exit|exitloop|false|for|func|global|if|in|local|next|not|null|or|redim|return|select|static|step|switch|then|to|true|until|volatile|wend|while|with)\\b',
      name: 'keyword.control.autoit'
    },
    {
      match:
        '\\b(?i:abs|acos|adlibregister|adlibunregister|asc|ascw|asin|assign|atan|autoitsetoption|autoitwingettitle|autoitwinsettitle|beep|binary|binarylen|binarymid|binarytostring|bitand|bitnot|bitor|bitrotate|bitshift|bitxor|blockinput|break|call|cdtray|ceiling|chr|chrw|clipget|clipput|consoleread|consolewrite|consolewriteerror|controlclick|controlcommand|controldisable|controlenable|controlfocus|controlgetfocus|controlgethandle|controlgetpos|controlgettext|controlhide|controllistview|controlmove|controlsend|controlsettext|controlshow|controltreeview|cos|dec|dircopy|dircreate|dirgetsize|dirmove|dirremove|dllcall|dllcalladdress|dllcallbackfree|dllcallbackgetptr|dllcallbackregister|dllclose|dllopen|dllstructcreate|dllstructgetdata|dllstructgetptr|dllstructgetsize|dllstructsetdata|drivegetdrive|drivegetfilesystem|drivegetlabel|drivegetserial|drivegettype|drivemapadd|drivemapdel|drivemapget|drivesetlabel|drivespacefree|drivespacetotal|drivestatus|envget|envset|envupdate|eval|execute|exp|filechangedir|fileclose|filecopy|filecreatentfslink|filecreateshortcut|filedelete|fileexists|filefindfirstfile|filefindnextfile|fileflush|filegetattrib|filegetencoding|filegetlongname|filegetpos|filegetshortcut|filegetshortname|filegetsize|filegettime|filegetversion|fileinstall|filemove|fileopen|fileopendialog|fileread|filereadline|filereadtoarray|filerecycle|filerecycleempty|filesavedialog|fileselectfolder|filesetattrib|filesetend|filesetpos|filesettime|filewrite|filewriteline|floor|ftpsetproxy|funcname|guicreate|guictrlcreateavi|guictrlcreatebutton|guictrlcreatecheckbox|guictrlcreatecombo|guictrlcreatecontextmenu|guictrlcreatedate|guictrlcreatedummy|guictrlcreateedit|guictrlcreategraphic|guictrlcreategroup|guictrlcreateicon|guictrlcreateinput|guictrlcreatelabel|guictrlcreatelist|guictrlcreatelistview|guictrlcreatelistviewitem|guictrlcreatemenu|guictrlcreatemenuitem|guictrlcreatemonthcal|guictrlcreateobj|guictrlcreatepic|guictrlcreateprogress|guictrlcreateradio|guictrlcreateslider|guictrlcreatetab|guictrlcreatetabitem|guictrlcreatetreeview|guictrlcreatetreeviewitem|guictrlcreateupdown|guictrldelete|guictrlgethandle|guictrlgetstate|guictrlread|guictrlrecvmsg|guictrlregisterlistviewsort|guictrlsendmsg|guictrlsendtodummy|guictrlsetbkcolor|guictrlsetcolor|guictrlsetcursor|guictrlsetdata|guictrlsetdefbkcolor|guictrlsetdefcolor|guictrlsetfont|guictrlsetgraphic|guictrlsetimage|guictrlsetlimit|guictrlsetonevent|guictrlsetpos|guictrlsetresizing|guictrlsetstate|guictrlsetstyle|guictrlsettip|guidelete|guigetcursorinfo|guigetmsg|guigetstyle|guiregistermsg|guisetaccelerators|guisetbkcolor|guisetcoord|guisetcursor|guisetfont|guisethelp|guiseticon|guisetonevent|guisetstate|guisetstyle|guistartgroup|guiswitch|hex|hotkeyset|httpsetproxy|httpsetuseragent|hwnd|inetclose|inetget|inetgetinfo|inetgetsize|inetread|inidelete|iniread|inireadsection|inireadsectionnames|inirenamesection|iniwrite|iniwritesection|inputbox|int|isadmin|isarray|isbinary|isbool|isdeclared|isdllstruct|isfloat|isfunc|ishwnd|isint|iskeyword|isnumber|isobj|isptr|isstring|log|memgetstats|mod|mouseclick|mouseclickdrag|mousedown|mousegetcursor|mousegetpos|mousemove|mouseup|mousewheel|msgbox|number|objcreate|objcreateinterface|objevent|objget|objname|onautoitexitregister|onautoitexitunregister|ping|pixelchecksum|pixelgetcolor|pixelsearch|processclose|processexists|processgetstats|processlist|processsetpriority|processwait|processwaitclose|progressoff|progresson|progressset|ptr|random|regdelete|regenumkey|regenumval|regread|regwrite|round|run|runas|runaswait|runwait|send|sendkeepactive|seterror|setextended|shellexecute|shellexecutewait|shutdown|sin|sleep|soundplay|soundsetwavevolume|splashimageon|splashoff|splashtexton|sqrt|srandom|statusbargettext|stderrread|stdinwrite|stdioclose|stdoutread|string|stringaddcr|stringcompare|stringformat|stringfromasciiarray|stringinstr|stringisalnum|stringisalpha|stringisascii|stringisdigit|stringisfloat|stringisint|stringislower|stringisspace|stringisupper|stringisxdigit|stringleft|stringlen|stringlower|stringmid|stringregexp|stringregexpreplace|stringreplace|stringreverse|stringright|stringsplit|stringstripcr|stringstripws|stringtoasciiarray|stringtobinary|stringtrimleft|stringtrimright|stringupper|tan|tcpaccept|tcpclosesocket|tcpconnect|tcplisten|tcpnametoip|tcprecv|tcpsend|tcpshutdown|tcpstartup|timerdiff|timerinit|tooltip|traycreateitem|traycreatemenu|traygetmsg|trayitemdelete|trayitemgethandle|trayitemgetstate|trayitemgettext|trayitemsetonevent|trayitemsetstate|trayitemsettext|traysetclick|trayseticon|traysetonevent|traysetpauseicon|traysetstate|traysettooltip|traytip|ubound|udpbind|udpclosesocket|udpopen|udprecv|udpsend|vargettype|winactivate|winactive|winclose|winexists|winflash|wingetcaretpos|wingetclasslist|wingetclientsize|wingethandle|wingetpos|wingetprocess|wingetstate|wingettext|wingettitle|winkill|winlist|winmenuselectitem|winminimizeall|winminimizeallundo|winmove|winsetontop|winsetstate|winsettitle|winsettrans|winwait|winwaitactive|winwaitclose|winwaitnotactive|opt|udpshutdown|udpstartup)\\b',
      name: 'support.function.autoit'
    },
    {name: 'support.function.other.autoit'},
    {name: 'support.function.other.autoit'},
    {
      match:
        '@\\b(?i:appdatacommondir|appdatadir|autoitexe|autoitpid|autoitversion|autoitx64|com_eventobj|commonfilesdir|compiled|computername|comspec|cpuarch|cr|crlf|desktopcommondir|desktopdepth|desktopdir|desktopheight|desktoprefresh|desktopwidth|documentscommondir|error|exitcode|exitmethod|extended|favoritescommondir|favoritesdir|gui_ctrlhandle|gui_ctrlid|gui_dragfile|gui_dragid|gui_dropid|gui_winhandle|homedrive|homepath|homeshare|hotkeypressed|hour|ipaddress1|ipaddress2|ipaddress3|ipaddress4|kblayout|lf|localappdatadir|logondnsdomain|logondomain|logonserver|mday|min|mon|msec|muilang|mydocumentsdir|numparams|osarch|osbuild|oslang|osservicepack|ostype|osversion|programfilesdir|programscommondir|programsdir|scriptdir|scriptfullpath|scriptlinenumber|scriptname|sec|startmenucommondir|startmenudir|startupcommondir|startupdir|sw_disable|sw_enable|sw_hide|sw_lock|sw_maximize|sw_minimize|sw_restore|sw_show|sw_showdefault|sw_showmaximized|sw_showminimized|sw_showminnoactive|sw_showna|sw_shownoactivate|sw_shownormal|sw_unlock|systemdir|tab|tempdir|tray_id|trayiconflashing|trayiconvisible|username|userprofiledir|wday|windowsdir|workingdir|yday|year)\\b',
      name: 'support.type.macro.autoit'
    },
    {
      captures: {
        1: {name: 'string.parameter.import.autoit'},
        2: {name: 'punctuation.definition.string.begin.import.autoit'},
        3: {name: 'punctuation.definition.string.end.import.autoit'}
      },
      match: '#(?i:include)\\s+((["\'<]).*(["\'>]))$',
      name: 'keyword.control.import.autoit'
    },
    {
      captures: {1: {name: 'string.parameter.directives.autoit'}},
      match:
        '#\\b(?i:include-once|notrayicon|onautoitstartregister|requireadmin|endregion|forcedef|forceref|ignorefunc|pragma|region)\\b(.*)$',
      name: 'keyword.control.directives.autoit'
    },
    {begin: '(?i:#cs)', end: '(?i:#ce).*$', name: 'comment.block.cs.autoit'},
    {
      begin: '(?i:#comments-start)',
      end: '(?i:#comments-end).*$',
      name: 'comment.block.comments-start.autoit'
    },
    {
      captures: {1: {name: 'punctuation.definition.comment.autoit'}},
      match: '(;).*',
      name: 'comment.line.semicolon.autoit'
    },
    {
      begin: '(")',
      beginCaptures: {1: {name: 'punctuation.definition.string.begin.autoit'}},
      end: '(")(?!")|^',
      endCaptures: {1: {name: 'punctuation.definition.string.end.autoit'}},
      name: 'string.quoted.double.autoit',
      patterns: [
        {match: '""', name: 'constant.character.escape.autoit'},
        {include: '#send-keys'},
        {include: '#restrict-newlines'}
      ]
    },
    {
      begin: "(')",
      beginCaptures: {1: {name: 'punctuation.definition.string.begin.autoit'}},
      end: "(')(?!')|^",
      endCaptures: {1: {name: 'punctuation.definition.string.end.autoit'}},
      name: 'string.quoted.single.autoit',
      patterns: [
        {match: "''", name: 'constant.character.escape.autoit'},
        {include: '#send-keys'},
        {include: '#restrict-newlines'}
      ]
    },
    {match: '(\\$)[a-zA-Z_][a-zA-Z0-9_]*', name: 'variable.other.autoit'},
    {
      match:
        '(?x) \\b\n((0(x|X)[0-9a-fA-F]*)\n|(\n  ([0-9]+\\.?[0-9]*)\n  |(\\.[0-9]+)\n )((e|E)(\\+|-)?[0-9]+)?\n)\\b\n',
      name: 'constant.numeric.autoit'
    },
    {match: '[-+*/&]?=', name: 'keyword.operator.assignment.autoit'},
    {match: '\\+|-|\\*|\\^|/|&', name: 'keyword.operator.arithmetic.autoit'},
    {match: '<|>|<>|[<>=]=', name: 'keyword.operator.comparison.autoit'},
    {match: '\\b(?i:not|and|or)\\b', name: 'keyword.operator.logical.autoit'},
    {match: '[\\[\\]()]', name: 'punctuation.bracket.autoit'},
    {match: '\\b_(?= *(?:$|;))', name: 'keyword.control.underscore.autoit'}
  ],
  repository: {
    'restrict-newlines': {
      patterns: [{match: '\\n.*$', name: 'invalid.illegal.string.eol.autoit'}]
    },
    'send-keys': {
      match:
        '{\\b(?i:appskey|backspace|browser_back|browser_favorites|browser_forward|browser_home|browser_refresh|browser_search|browser_stop|bs|capslock|del|delete|up|up .|down|down .|end|enter|enter .|esc|escape|f1|f10|f11|f12|f2|f3|f4|f5|f6|f7|f8|f9|home|ins|insert|launch_app1|launch_app2|launch_mail|launch_media|left|left .|media_next|media_play_pause|media_prev|media_stop|numlock|numpad0|numpad1|numpad2|numpad3|numpad4|numpad5|numpad6|numpad7|numpad8|numpad9|numpadadd|numpaddiv|numpaddot|numpadenter|numpadmult|numpadsub|pause|pgdn|pgup|printscreen|right|right .|scrolllock|sleep|space|tab|tab .|up|volume_down|volume_mute|volume_up)\\b}',
      name: 'constant.other.send-key.autoit'
    }
  },
  scopeName: 'source.autoit'
}

export default grammar
