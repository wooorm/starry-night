// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/shadanan/mathematica-tmbundle>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [
    '.mathematica',
    '.cdf',
    '.ma',
    '.mt',
    '.nb',
    '.nbp',
    '.wl',
    '.wlt'
  ],
  names: [
    'mathematica',
    'mma',
    'wolfram',
    'wolfram-language',
    'wolfram-lang',
    'wl'
  ],
  patterns: [
    {include: '#builtin_symbols'},
    {include: '#builtin_variables'},
    {include: '#builtin_operators'},
    {include: '#pattern'},
    {include: '#array_index'},
    {include: '#constant'},
    {include: '#sqlstring'},
    {include: '#string'},
    {include: '#number'},
    {include: '#list'},
    {include: '#emptyfunction'},
    {include: '#function'},
    {include: '#symbol'},
    {include: '#comment'}
  ],
  repository: {
    array_index: {
      begin: '\\[\\[',
      beginCaptures: {
        0: {name: 'punctuation.definition.part.begin.mathematica'}
      },
      end: '\\]\\]',
      endCaptures: {0: {name: 'punctuation.definition.part.end.mathematica'}},
      name: 'meta.structure.part.mathematica',
      patterns: [
        {include: '$self'},
        {match: ',', name: 'punctuation.separator.part.mathematica'}
      ]
    },
    builtin_operators: {
      patterns: [
        {match: '\\^:=', name: 'keyword.operator.assignment.up_set_delayed'},
        {match: '===', name: 'keyword.operator.logical.same'},
        {match: '=!=', name: 'keyword.operator.logical.not_same'},
        {match: '\\>\\>\\>', name: 'keyword.operator.mathematica.put_append'},
        {
          match: '\\*\\^',
          name: 'keyword.operator.arithmetic.scientific_notation'
        },
        {match: ':=', name: 'keyword.operator.assignment.set_delayed'},
        {match: '\\^=', name: 'keyword.operator.assignment.up_set'},
        {match: '&&', name: 'keyword.operator.logical.and'},
        {match: '||', name: 'keyword.operator.logical.or'},
        {match: '==', name: 'keyword.operator.logical.equal'},
        {match: '!=', name: 'keyword.operator.logical.not_equal'},
        {match: '\\>=', name: 'keyword.operator.logical.greater_than_or_equal'},
        {match: '\\<=', name: 'keyword.operator.logical.less_than_or_equal'},
        {match: ';;', name: 'keyword.operator.mathematica.span'},
        {
          match: '\\.\\.\\.',
          name: 'keyword.operator.mathematica.repeated_null'
        },
        {match: '\\.\\.', name: 'keyword.operator.mathematica.repeated'},
        {match: '//\\.', name: 'keyword.operator.mathematica.replace_repeated'},
        {match: '/\\.', name: 'keyword.operator.mathematica.replace'},
        {match: '-\\>', name: 'keyword.operator.mathematica.rule'},
        {match: ':\\>', name: 'keyword.operator.mathematica.rule_delayed'},
        {match: '@{1,3}', name: 'keyword.operator.mathematica.apply'},
        {match: '//@', name: 'keyword.operator.mathematica.map_all'},
        {match: '/@', name: 'keyword.operator.mathematica.map'},
        {match: '\\<\\>', name: 'keyword.operator.mathematica.string_join'},
        {match: '\\<\\<', name: 'keyword.operator.mathematica.get'},
        {match: '\\>\\>', name: 'keyword.operator.mathematica.put'},
        {match: '/;', name: 'keyword.operator.mathematica.condition'},
        {match: '/:', name: 'keyword.operator.mathematica.tag'},
        {match: '//', name: 'keyword.operator.mathematica.postfix'},
        {match: '~~', name: 'keyword.operator.mathematica.string_expression'},
        {match: '\\+', name: 'keyword.operator.arithmetic.plus'},
        {match: '-', name: 'keyword.operator.arithmetic.minus'},
        {match: '\\*', name: 'keyword.operator.arithmetic.times'},
        {match: '/', name: 'keyword.operator.arithmetic.divide'},
        {match: '\\^', name: 'keyword.operator.arithmetic.power'},
        {match: '!', name: 'keyword.operator.logical.not'},
        {match: '\\>', name: 'keyword.operator.logical.greater_than'},
        {match: '\\<', name: 'keyword.operator.logical.less_than'},
        {match: '|', name: 'keyword.operator.mathematica.alternative'},
        {match: '@', name: 'keyword.operator.mathematica.prefix'},
        {match: ';', name: 'keyword.operator.mathematica.compound_expression'},
        {match: '`', name: 'keyword.operator.mathematica.context'},
        {match: '&', name: 'keyword.operator.mathematica.function'},
        {match: '#\\d*', name: 'keyword.operator.mathematica.slot'},
        {match: '\\?', name: 'keyword.operator.mathematica.pattern_test'},
        {match: '=\\.', name: 'keyword.operator.mathematica.unset'},
        {match: '=', name: 'keyword.operator.mathematica.set'},
        {match: "'", name: 'keyword.operator.mathematica.derivative'}
      ]
    },
    builtin_symbols: {
      patterns: [{name: 'support.function.mathematica.system'}]
    },
    builtin_variables: {
      patterns: [
        {
          match:
            '(\\$Aborted|$ActivationKey|$AddOnsDirectory|$AssertFunction|$Assumptions|$BaseDirectory|$BatchInput|$BatchOutput|$BoxForms|$ByteOrdering|$Canceled|$CharacterEncoding|$CharacterEncodings|$CommandLine|$CompilationTarget|$ConditionHold|$ConfiguredKernels|$Context|$ContextPath|$ControlActiveSetting|$CreationDate|$CurrentLink|$DateStringFormat|$DefaultFont|$DefaultFrontEnd|$DefaultPath|$Display|$DisplayFunction|$DistributedContexts|$DynamicEvaluation|$Echo|$Epilog|$ExportFormats|$Failed|$FinancialDataSource|$FormatType|$FrontEnd|$FrontEndSession|$GeoLocation|$HistoryLength|$HomeDirectory|$IgnoreEOF|$ImportFormats|$InitialDirectory|$Input|$InputFileName|$Inspector|$InstallationDate|$InstallationDirectory|$InterfaceEnvironment|$IterationLimit|$KernelCount|$KernelID|$Language|$LaunchDirectory|$LibraryPath|$LicenseExpirationDate|$LicenseID|$LicenseProcesses|$LicenseServer|$LicenseSubprocesses|$LicenseType|$Line|$Linked|$LinkSupported|$LoadedFiles|$MachineAddresses|$MachineDomain|$MachineDomains|$MachineEpsilon|$MachineID|$MachineName|$MachinePrecision|$MachineType|$MaxExtraPrecision|$MaxLicenseProcesses|$MaxLicenseSubprocesses|$MaxMachineNumber|$MaxNumber|$MaxPiecewiseCases|$MaxPrecision|$MaxRootDegree|$MessageGroups|$MessageList|$MessagePrePrint|$Messages|$MinMachineNumber|$MinNumber|$MinorReleaseNumber|$MinPrecision|$ModuleNumber|$NetworkLicense|$NewMessage|$NewSymbol|$Notebooks|$NumberMarks|$Off|$OperatingSystem|$Output|$OutputForms|$OutputSizeLimit|$Packages|$ParentLink|$ParentProcessID|$PasswordFile|$Path|$PathnameSeparator|$PerformanceGoal|$PipeSupported|$Post|$Pre|$PreferencesDirectory|$PrePrint|$PreRead|$PrintForms|$PrintLiteral|$ProcessID|$ProcessorCount|$ProcessorType|$ProductInformation|$ProgramName|$RandomState|$RecursionLimit|$ReleaseNumber|$RootDirectory|$ScheduledTask|$SessionID|$SetParentLink|$SharedFunctions|$SharedVariables|$SoundDisplay|$SoundDisplayFunction|$SuppressInputFormHeads|$SynchronousEvaluation|$SyntaxHandler|$System|$SystemCharacterEncoding|$SystemID|$SystemWordLength|$TemporaryDirectory|$TemporaryPrefix|$TextStyle|$TimedOut|$TimeUnit|$TimeZone|$TopDirectory|$TraceOff|$TraceOn|$TracePattern|$TracePostAction|$TracePreAction|$Urgent|$UserAddOnsDirectory|$UserBaseDirectory|$UserDocumentsDirectory|$UserName|$Version|$VersionNumber)\\b',
          name: 'support.variable.mathematica.system'
        }
      ]
    },
    comment: {
      begin: '\\(\\*',
      end: '\\*\\)',
      name: 'comment.block.mathematica',
      patterns: [{include: '#comment'}]
    },
    constant: {
      match: '\\b(True|False|Null|Automatic|All|None|Infinity)\\b',
      name: 'constant.language.mathematica'
    },
    emptyfunction: {
      captures: {
        1: {name: 'entity.name.function.empty.mathematica'},
        2: {name: 'punctuation.definition.function.empty.begin.mathematica'},
        3: {name: 'meta.scope.between_empty_brackets'}
      },
      match: '([a-zA-Z$][a-zA-Z0-9$]*)(\\[)(\\])',
      name: 'meta.structure.function.empty.mathematica'
    },
    function: {
      begin: '([a-zA-Z$][a-zA-Z0-9$]*)(\\[)(?!\\[)',
      beginCaptures: {
        1: {name: 'entity.name.function.mathematica'},
        2: {name: 'punctuation.definition.function.begin.mathematica'}
      },
      end: '\\]',
      endCaptures: {
        0: {name: 'punctuation.definition.function.end.mathematica'}
      },
      name: 'meta.structure.function.mathematica',
      patterns: [
        {include: '$self'},
        {match: ',', name: 'punctuation.separator.list.mathematica'}
      ]
    },
    list: {
      begin: '\\{',
      beginCaptures: {
        0: {name: 'punctuation.definition.list.begin.mathematica'}
      },
      end: '\\}',
      endCaptures: {0: {name: 'punctuation.definition.list.end.mathematica'}},
      name: 'meta.structure.list.mathematica',
      patterns: [
        {include: '$self'},
        {match: ',', name: 'punctuation.separator.list.mathematica'}
      ]
    },
    number: {
      match: '\\b(\\d+(\\.\\d*)?)',
      name: 'constant.numeric.mathematica'
    },
    pattern: {
      patterns: [
        {
          match: '([a-zA-Z$][a-zA-Z0-9$]*)?(___)',
          name: 'variable.parameter.mathematica.blank_null_sequence_pattern'
        },
        {
          match: '([a-zA-Z$][a-zA-Z0-9$]*)?(__)',
          name: 'variable.parameter.mathematica.blank_sequence_pattern'
        },
        {
          match: '([a-zA-Z$][a-zA-Z0-9$]*)?(_)',
          name: 'variable.parameter.mathematica.blank_pattern'
        }
      ]
    },
    sqlstring: {
      begin: '"(?=\\s*(SELECT|INSERT|UPDATE|DELETE|CREATE|REPLACE|ALTER))',
      end: '"',
      name: 'string.quoted.double.sql.mathematica',
      patterns: [
        {include: '#constant_placeholder'},
        {include: '#escaped_char'},
        {include: 'source.sql'}
      ]
    },
    string: {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.mathematica',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.untitled'}]
    },
    symbol: {
      match: '[a-zA-Z$][a-zA-Z0-9$]*\\b',
      name: 'variable.symbol.mathematica'
    }
  },
  scopeName: 'source.mathematica'
}

export default grammar
