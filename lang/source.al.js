// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/microsoft/AL>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.al'],
  names: ['al'],
  patterns: [
    {
      match:
        '\\b(?i:(ARRAY|ASSERTERROR|BEGIN|BREAK|CASE|DO|DOWNTO|ELSE|END|EVENT|EXIT|FOR|FOREACH|FUNCTION|IF|IMPLEMENTS|IN|INDATASET|INTERFACE|INTERNAL|LOCAL|OF|PROCEDURE|PROGRAM|PROTECTED|REPEAT|RUNONCLIENT|SECURITYFILTERING|SUPPRESSDISPOSE|TEMPORARY|THEN|TO|TRIGGER|UNTIL|VAR|WHILE|WITH|WITHEVENTS))\\b',
      name: 'keyword.control.al'
    },
    {
      match: '\\b(?i:(AND|DIV|MOD|NOT|OR|XOR))\\b',
      name: 'keyword.operators.al'
    },
    {
      match:
        '\\b(?i:(AVERAGE|CONST|COUNT|EXIST|FIELD|FILTER|LOOKUP|MAX|MIN|ORDER|SORTING|SUM|TABLEDATA|UPPERLIMIT|WHERE|ASCENDING|DESCENDING))\\b',
      name: 'keyword.other.property.al'
    },
    {
      match:
        '\\b(?i:(CODEUNIT|PAGE|PAGEEXTENSION|PAGECUSTOMIZATION|DOTNET|ENUM|ENUMEXTENSION|VALUE|QUERY|REPORT|TABLE|TABLEEXTENSION|XMLPORT|PROFILE|CONTROLADDIN|REPORTEXTENSION|INTERFACE|PERMISSIONSET|PERMISSIONSETEXTENSION|ENTITLEMENT))\\b',
      name: 'keyword.other.applicationobject.al'
    },
    {
      match:
        '\\b(?i:(Action|ActionRef|Array|Automation|BigInteger|BigText|SecretText|Blob|Boolean|Byte|Char|ClientType|Code|Codeunit|CompletionTriggerErrorLevel|ConnectionType|CustomAction|Database|DataClassification|DataScope|DataTransfer|Date|DateFormula|DateTime|Decimal|DefaultLayout|Dialog|Dictionary|DotNet|DotNetAssembly|DotNetTypeDeclaration|Duration|Enum|ErrorInfo|ErrorType|ExecutionContext|ExecutionMode|FieldClass|FieldRef|FieldType|File|FilterPageBuilder|Guid|InStream|Integer|IsolationLevel|Joker|KeyRef|List|Media|MediaSet|ModuleDependencyInfo|ModuleInfo|None|Notification|NotificationScope|ObjectType|Option|OutStream|Page|PageResult|Query|Record|RecordId|RecordRef|Report|ReportFormat|SecurityFilter|SecurityFiltering|SystemAction|Table|TableConnectionType|TableFilter|TestAction|TestField|TestFilterField|TestPage|TestPermissions|TestRequestPage|Text|TextBuilder|TextConst|TextEncoding|Time|TransactionModel|TransactionType|Variant|Verbosity|Version|XmlPort|HttpContent|HttpHeaders|HttpClient|HttpRequestMessage|HttpResponseMessage|JsonToken|JsonValue|JsonArray|JsonObject|View|Views|XmlAttribute|XmlAttributeCollection|XmlComment|XmlCData|XmlDeclaration|XmlDocument|XmlDocumentType|XmlElement|XmlNamespaceManager|XmlNameTable|XmlNode|XmlNodeList|XmlProcessingInstruction|XmlReadOptions|XmlText|XmlWriteOptions|WebServiceActionContext|WebServiceActionResultCode|SessionSettings|PageBackgroundTaskErrorLevel))\\b',
      name: 'keyword.other.builtintypes.al'
    },
    {match: '\\b([<>]=|<>|<|>)\\b', name: 'keyword.operators.comparison.al'},
    {match: '\\b(\\-|\\+|\\/|\\*)\\b', name: 'keyword.operators.math.al'},
    {
      match: '\\s*(\\:=|\\+=|-=|\\/=|\\*=)\\s*',
      name: 'keyword.operators.assigment.al'
    },
    {
      match:
        '\\b(?i:(ADD|ADDFIRST|ADDLAST|ADDAFTER|ADDBEFORE|ACTION|ACTIONS|AREA|ASSEMBLY|CHARTPART|CUEGROUP|CUSTOMIZES|COLUMN|DATAITEM|DATASET|ELEMENTS|EXTENDS|FIELD|FIELDGROUP|FIELDATTRIBUTE|FIELDELEMENT|FIELDGROUPS|FIELDS|FILTER|FIXED|GRID|GROUP|MOVEAFTER|MOVEBEFORE|KEY|KEYS|LABEL|LABELS|LAYOUT|MODIFY|MOVEFIRST|MOVELAST|MOVEBEFORE|MOVEAFTER|NAMESPACE|PART|RENDERING|REPEATER|USERCONTROL|REQUESTPAGE|SCHEMA|SEPARATOR|SYSTEMPART|TABLEELEMENT|TEXTATTRIBUTE|TEXTELEMENT|TYPE|USING))\\b',
      name: 'keyword.other.metadata.al'
    },
    {match: '\\s*[(\\.\\.)&\\|]\\s*', name: 'keyword.operators.property.al'},
    {
      captures: {1: {name: 'entity.name.applicationobject.al'}},
      match: '\\b(?i:(CODEUNIT|PAGE|QUERY|REPORT|TABLE|XMLPORT))\\b',
      name: 'meta.applicationobject.al'
    },
    {
      captures: {1: {name: 'entity.name.function.al'}},
      match:
        '\\b(?i:(trigger|procedure))\\b\\s+(\\w+(\\.\\w+)?)(\\(.*?\\))?;\\s*',
      name: 'meta.function.al'
    },
    {
      match:
        '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b',
      name: 'constant.numeric.al'
    },
    {
      begin: '(^[ \\t]+)?(?=//)',
      beginCaptures: {1: {name: 'punctuation.whitespace.comment.leading.al'}},
      end: '(?!\\G)',
      patterns: [
        {
          begin: '//',
          beginCaptures: {0: {name: 'punctuation.definition.comment.al'}},
          end: '\\n',
          name: 'comment.line.double-slash.al.two'
        }
      ]
    },
    {
      begin: '(^[ \\t]+)?(?=#)',
      beginCaptures: {1: {name: 'punctuation.whitespace.directive.leading.al'}},
      end: '(?!\\G)',
      patterns: [
        {
          begin: '#',
          beginCaptures: {0: {name: 'punctuation.definition.directive.al'}},
          end: '\\n',
          name: 'comment.line.number-sign.al.two'
        }
      ]
    },
    {
      begin: '/\\*',
      captures: {0: {name: 'punctuation.definition.comment.al'}},
      end: '\\*/\\n?',
      name: 'comment.block.al.one'
    },
    {
      applyEndPatternLast: true,
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.al'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.al'}},
      name: 'string.quoted.single.al',
      patterns: [{match: "''", name: 'constant.character.escape.apostrophe.al'}]
    },
    {match: '[;:,]', name: 'punctuation.al'},
    {applyEndPatternLast: true, begin: '"', end: '"'}
  ],
  scopeName: 'source.al'
}

export default grammar
