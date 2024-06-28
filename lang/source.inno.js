// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/idleberg/atom-language-innosetup>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.pascal'],
  extensions: ['.iss', '.isl'],
  names: ['inno-setup'],
  patterns: [
    {
      begin: '^(\\[(?i)Code\\])$',
      beginCaptures: {1: {name: 'entity.name.section.inno'}},
      end: '^(?i)(\\[(Components|CustomMessages|Dirs|Files|Icons|INI|InstallDelete|LangOptions|Languages|Messages|Registry|Run|Setup|Tasks|Types|UninstallDelete|UninstallRun)\\])$',
      endCaptures: {1: {name: 'entity.name.section.inno'}},
      name: 'source.pascal.embedded.inno',
      patterns: [{include: 'source.pascal'}]
    },
    {
      match:
        '^(?i)\\s*(AllowCancelDuringInstall|AllowNetworkDrive|AllowNoIcons|AllowRootDirectory|AllowUNCPath|AlwaysCreateUninstallIcon|AlwaysRestart|AlwaysShowComponentsList|AlwaysShowDirOnReadyPage|AlwaysShowGroupOnReadyPage|AlwaysUsePersonalGroup|AppComments|AppContact|AppCopyright|AppendDefaultDirName|AppendDefaultGroupName|AppId|AppModifyPath|AppMutex|AppName|AppPublisher|AppPublisherURL|AppReadmeFile|AppSupportPhone|AppSupportURL|AppUpdatesURL|AppVerName|AppVersion|ArchitecturesAllowed|ArchitecturesInstallIn64BitMode|BackColor|BackColor2|BackColorDirection|BackSolid|ChangesAssociations|ChangesEnvironment|CloseApplications|CloseApplicationsFilter|Compression|CompressionThreads|CopyrightFontName|CopyrightFontSize|CreateAppDir|CreateUninstallRegKey|DefaultDialogFontName|DefaultDirName|DefaultGroupName|DefaultUserInfoName|DefaultUserInfoOrg|DefaultUserInfoSerial|DialogFontName|DialogFontSize|DirExistsWarning|DisableDirPage|DisableFinishedPage|DisableProgramGroupPage|DisableReadyMemo|DisableReadyPage|DisableStartupPrompt|DisableWelcomePage|DiskClusterSize|DiskSliceSize|DiskSpanning|EnableDirDoesntExistWarning|Encryption|ExtraDiskSpaceRequired|FlatComponentsList|InfoAfterFile|InfoBeforeFile|InternalCompressLevel|LanguageCodePage|LanguageDetectionMethod|LanguageID|LanguageName|LicenseFile|LZMAAlgorithm|LZMABlockSize|LZMADictionarySize|LZMAMatchFinder|LZMANumBlockThreads|LZMANumFastBytes|LZMAUseSeparateProcess|MergeDuplicateFiles|MinVersion|OnlyBelowVersion|Output|OutputBaseFilename|OutputDir|OutputManifestFile|Password|PrivilegesRequired|ReserveBytes|RestartApplications|RestartIfNeededByRun|RightToLeft|SetupIconFile|SetupLogging|ShowComponentSizes|ShowLanguageDialog|ShowTasksTreeLines|ShowUndisplayableLanguages|SignedUninstaller|SignedUninstallerDir|SignTool|SignToolMinimumTimeBetween|SignToolRetryCount|SignToolRetryDelay|SlicesPerDisk|SolidCompression|SourceDir|TerminalServicesAware|TimeStampRounding|TimeStampsInUTC|TitleFontName|TitleFontSize|TouchDate|TouchTime|Uninstallable|UninstallDisplayIcon|UninstallDisplayName|UninstallDisplaySize|UninstallFilesDir|UninstallLogMode|UninstallRestartComputer|UpdateUninstallLogAppName|UsePreviousAppDir|UsePreviousGroup|UsePreviousLanguage|UsePreviousSetupType|UsePreviousTasks|UsePreviousUserInfo|UserInfoPage|UseSetupLdr|VersionInfoCompany|VersionInfoCopyright|VersionInfoDescription|VersionInfoOriginalFileName|VersionInfoProductName|VersionInfoProductTextVersion|VersionInfoProductVersion|VersionInfoTextVersion|VersionInfoVersion|WelcomeFontName|WelcomeFontSize|WindowResizable|WindowShowCaption|WindowStartMaximized|WindowVisible|WizardImageBackColor|WizardImageFile|WizardImageStretch|WizardSmallImageFile)(?=\\s*=)',
      name: 'keyword.inno'
    },
    {
      match:
        '^(?i)\\s*#(append|define|dim|elif|else|emit|endif|endsub|error|expr|file|for|if|ifn?def|ifn?exist|include|insert|pragma|preproc|redim|sub|undef)\\b',
      name: 'keyword.other.inno'
    },
    {
      match:
        '\\b(?i)(AfterInstall|AfterMyProgInstall|BeforeInstall|BeforeMyProgInstall|Check|Components|Description|DestDir|DestName|Filename|Flags|Languages|Name|Parameters|Root|Source|StatusMsg|Subkey|Type|Types|ValueData|ValueName|ValueType|WorkingDir)(?=\\s*:)',
      name: 'keyword.other.inno'
    },
    {
      match: '\\b(?i)(BeveledLabel|MyAppName|MyAppVerName|MyDescription)\\b',
      name: 'keyword.other.inno'
    },
    {
      match:
        '^(?i)\\[(Components|CustomMessages|Dirs|Files|Icons|INI|InstallDelete|LangOptions|Languages|Messages|Registry|Run|Setup|Tasks|Types|UninstallDelete|UninstallRun)\\]$',
      name: 'entity.name.section.inno'
    },
    {
      match:
        '\\b(?i)(DisableAppendDir|DontMergeDuplicateFiles|MessagesFile|UninstallIconFile|UninstallIconName|UninstallStyle|WizardSmallImageBackColor|WizardStyle)\\b',
      name: 'constant.language.inno'
    },
    {match: '=', name: 'keyword.operator.comparison.inno'},
    {
      match: '\\b((0(x|X)[0-9a-fA-F]+)|([0-9]+(\\.[0-9]+)?))\\b',
      name: 'constant.numeric.inno'
    },
    {
      match:
        '\\b(?i)(32bit|64bit|admin|allowunsafefiles|append|auto|binary|bzip|checkablealone|checkedonce|clAqua|clBlack|clBlue|clFuchsia|clGray|clGreen|clLime|clMaroon|clNavy|clOlive|closeonexit|clPurple|clRed|clSilver|clTeal|clWhite|clYellow|compact|comparetimestamp|compiler|confirmoverwrite|createallsubdirs|createkeyifdoesntexist|createonlyiffileexists|createvalueifdoesntexist|current|custom|deleteafterinstall|deletekey|deletevalue|desktopicon|dirifempty|disablenouninstallwarning|dontcloseonexit|dontcopy|dontcreatekey|dontinheritcheck|dontverifychecksum|dword|excludefromshowinnewinstall|exclusive|expandsz|external|fast|files|filesandordirs|fixed|foldershortcut|fontisnttruetype|full|gacinstall|help|hidewizard|ia64|ignoreversion|iscustom|isreadme|lefttoright|locale|lowest|lzma|lzma2|main|max|modify|multisz|new|no|nocompression|noencryption|noerror|none|noregerror|normal|nowait|onlyifdoesntexist|overwrite|overwritereadonly|postinstall|poweruser|preservestringtype|preventpinning|program|promptifolder|qword|read|readexec|readme|recursesubdirs|regserver|regtypelib|replacesameversion|restart|restartreplace|runascurrentuser|runasoriginaluser|runhidden|runminimized|setntfscompression|sharedfile|shellexec|skipifdoesntexist|skipifnotsilent|skipifsilent|skipifsourcedoesntexist|solidbreak|sortfilesbyextension|sortfilesbyname|string|toptobottom|touch|uilanguage|ultra|unchecked|uninsalwaysuninstall|uninsclearvalue|uninsdeleteentry|uninsdeletekey|uninsdeletekeyifempty|uninsdeletesection|uninsdeletesectionifempty|uninsdeletevalue|uninsneveruninstall|uninsnosharedfileprompt|uninsremovereadonly|uninsrestartdelete|unsetntfscompression|useapppaths|waituntilidle|waituntilterminated|x64|x86|yes|zip)\\b',
      name: 'constant.language.inno'
    },
    {
      match:
        '\\b(?i)(aa|ab|ae|af|ak|am|an|ar|as|av|ay|az|ba|be|bg|bh|bi|bm|bn|bo|br|bs|ca|ce|ch|co|cr|cs|cu|cv|cy|da|de|dv|dz|ee|el|en|eo|es|et|eu|fa|ff|fi|fj|fo|fr|fy|ga|gd|gl|gn|gu|gv|ha|he|hi|ho|hr|ht|hu|hy|hz|ia|id|ie|ig|ii|ik|io|is|it|iu|ja|jv|ka|kg|ki|kj|kk|kl|km|kn|ko|kr|ks|ku|kv|kw|ky|la|lb|lg|li|ln|lo|lt|lu|lv|mg|mh|mi|mk|mk|ml|mn|mr|ms|mt|my|na|nb|nd|ne|ng|nl|nn|no|nr|nv|ny|oc|oj|om|or|os|pa|pi|pl|ps|pt|qt|qu|rg|rm|rn|ro|ru|rw|sa|sc|sd|se|sg|si|sk|sl|sm|sn|so|sq|sr|ss|st|su|sv|sw|ta|te|tg|th|ti|tk|tl|tn|to|tr|ts|tt|tw|ty|ug|uk|ur|uz|ve|vi|vo|wa|wo|xh|yi|yo|zh)(?:\\.\\w)?\\b',
      name: 'constant.language.inno'
    },
    {
      match:
        '(?i){(app|cf32|cf64|cf|cmd|commonappdata|commondocs|computername|dao|dotnet11|dotnet2032|dotnet2064|dotnet20|dotnet4032|dotnet4064|dotnet40|fonts|groupname|group|hwnd|language|localappdata|log|pf32|pf64|pf|sd|sendto|srcexe|src|sysuserinfoname|sysuserinfoorg|syswow64|sys|tmp|uninstallexe|usercf|userinfoname|userinfoorg|userinfoserial|username|userpf|win|wizardhwnd)}',
      name: 'constant.other.inno'
    },
    {match: '%\\w+', name: 'variable.other.inno'},
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.inno'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.inno'}},
      name: 'string.quoted.back.inno',
      patterns: [
        {
          match:
            '(?i){(app|cf32|cf64|cf|cmd|commonappdata|commondocs|computername|dao|dotnet11|dotnet2032|dotnet2064|dotnet20|dotnet4032|dotnet4064|dotnet40|fonts|groupname|group|hwnd|language|localappdata|log|pf32|pf64|pf|sd|sendto|srcexe|src|sysuserinfoname|sysuserinfoorg|syswow64|sys|tmp|uninstallexe|usercf|userinfoname|userinfoorg|userinfoserial|username|userpf|win|wizardhwnd)}',
          name: 'constant.other.inno'
        },
        {match: '%\\w+', name: 'variable.other.inno'}
      ]
    },
    {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.inno'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.inno'}},
      name: 'string.quoted.back.inno',
      patterns: [
        {
          match:
            '(?i){(app|cf32|cf64|cf|cmd|commonappdata|commondocs|computername|dao|dotnet11|dotnet2032|dotnet2064|dotnet20|dotnet4032|dotnet4064|dotnet40|fonts|groupname|group|hwnd|language|localappdata|log|pf32|pf64|pf|sd|sendto|srcexe|src|sysuserinfoname|sysuserinfoorg|syswow64|sys|tmp|uninstallexe|usercf|userinfoname|userinfoorg|userinfoserial|username|userpf|win|wizardhwnd)}',
          name: 'constant.other.inno'
        },
        {match: '%\\w+', name: 'variable.other.inno'}
      ]
    },
    {
      captures: {1: {name: 'punctuation.definition.comment.inno'}},
      match: '^\\s*;.*$',
      name: 'comment.line.semicolon.inno'
    }
  ],
  scopeName: 'source.inno'
}

export default grammar
