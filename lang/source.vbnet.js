// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/angryant0007/VBDotNetSyntax>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [
    '.bi',
    '.rbbas',
    '.rbfrm',
    '.rbmnu',
    '.rbres',
    '.rbtbar',
    '.rbuistate',
    '.vb',
    '.vbhtml',
    '.vbs'
  ],
  names: [
    'fb',
    'freebasic',
    'realbasic',
    'vb-.net',
    'vb.net',
    'vbnet',
    'vbscript',
    'visual-basic',
    'visual-basic-.net'
  ],
  patterns: [
    {include: '#comment-single-quote'},
    {include: '#comment-rem'},
    {include: '#keyword-a'},
    {include: '#keyword-b'},
    {include: '#keyword-c'},
    {include: '#keyword-d'},
    {include: '#keyword-e'},
    {include: '#keyword-f'},
    {include: '#keyword-g'},
    {include: '#keyword-h'},
    {include: '#keyword-i'},
    {include: '#keyword-j'},
    {include: '#keyword-k'},
    {include: '#keyword-l'},
    {include: '#keyword-m'},
    {include: '#keyword-n'},
    {include: '#keyword-o'},
    {include: '#keyword-p'},
    {include: '#keyword-r'},
    {include: '#keyword-s'},
    {include: '#keyword-t'},
    {include: '#keyword-u'},
    {include: '#keyword-v'},
    {include: '#keyword-w'},
    {include: '#keyword-x'},
    {include: '#keyword-y'},
    {include: '#integer-literal'},
    {include: '#floating-point-literal'},
    {include: '#character-literal'},
    {include: '#string-literal'},
    {include: '#date-literal'},
    {include: '#symbol'},
    {include: '#identifier'}
  ],
  repository: {
    'character-literal': {
      match:
        '(?i:["\\x{201C}\\x{201D}]([^"\\x{201C}\\x{201D}]|["\\x{201C}\\x{201D}]{2})["\\x{201C}\\x{201D}]C)',
      name: 'string.quoted.double.vbnet'
    },
    'comment-rem': {
      match:
        '(?i)(?<=[^_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Nd}\\p{Mn}\\p{Mc}\\p{Cf}\\p{Pc}])REM((?=[\\r|\\n])| [^\\r\\n]*)',
      name: 'comment.line.singlequote.vbnet'
    },
    'comment-single-quote': {
      match: "['\\x{2018}\\x{2019}][^\\r\\n]*",
      name: 'comment.line.singlequote.vbnet'
    },
    'date-literal': {
      match:
        '(#\\s*(((((\\d+/\\d+/\\d+)|(\\d+-\\d+-\\d+))\\s+(\\d+:\\d+(:\\d+)?\\s*(AM|PM)?)))|((\\d+/\\d+/\\d+)|(\\d+-\\d+-\\d+))|(\\d+:\\d+(:\\d+)?\\s*(AM|PM)?))\\s*#)',
      name: 'string.quoted.double.vbnet'
    },
    'floating-point-literal': {
      match:
        '(?i:[0-9]*(\\.[0-9]+)?((?<=[0-9])E[+-]?[0-9]+)?(?<=[0-9])[FRD@&#]?)',
      name: 'string.quoted.double.vbnet'
    },
    identifier: {
      match:
        '(([\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}]|_[_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Nd}\\p{Mn}\\p{Mc}\\p{Cf}\\p{Pc}])[_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Nd}\\p{Mn}\\p{Mc}\\p{Cf}\\p{Pc}]*[%&@!#$]?|\\[([\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}]|_[_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Nd}\\p{Mn}\\p{Mc}\\p{Cf}\\p{Pc}])[_\\p{Lu}\\p{Ll}\\p{Lt}\\p{Lm}\\p{Lo}\\p{Nl}\\p{Nd}\\p{Mn}\\p{Mc}\\p{Cf}\\p{Pc}]*\\])',
      name: 'variable.other.namespace-alias.vbnet'
    },
    'integer-literal': {
      match: '(?i)(&H[0-9A-F]+|&O[0-7]+|&B[0-1]+|[0-9]+)(S|I|L|US|UI|UL|%|!)?',
      name: 'string.quoted.double.vbnet'
    },
    'keyword-a': {
      match:
        '(?i)(?<![.!])(AddHandler|AddressOf|Aggregate|Alias|And|AndAlso|Ansi|As|Ascending|Assembly|Async(?=\\s+(Sub|Function))|Auto|Await)\\b',
      name: 'keyword.other.vbnet'
    },
    'keyword-b': {
      match:
        '(?i)(?<![.!])((?<=Compare)\\s+Binary|Boolean|ByRef|Byte|ByVal)\\b',
      name: 'keyword.other.vbnet'
    },
    'keyword-c': {
      match:
        '(?i)(?<![.!])(Call|Case|Catch|CBool|CByte|CChar|CDate|CDbl|CDec|Char|CInt|Class|CLng|CObj|(?<=Option\\s)Compare|Const|Continue|CShort|CSng|CStr|CType|Custom(?=\\s+Event))\\b',
      name: 'keyword.other.vbnet'
    },
    'keyword-d': {
      match:
        '(?i)(?<![.!])(Date|Decimal|Declare|Default|Delegate|Descending|Dim|DirectCast|Distinct|Do|Double)\\b',
      name: 'keyword.other.vbnet'
    },
    'keyword-e': {
      match:
        '(?i)(?<![.!])(Each|Else|ElseIf|End|EndIf|Enum|Equals|Erase|Error|Event|Exit|(?<=Option)\\s+Explicit)\\b',
      name: 'keyword.other.vbnet'
    },
    'keyword-f': {
      match:
        '(?i)(?<![.!])(False|Finally|For|Friend|From(?=\\s+{)|From|Function)\\b',
      name: 'keyword.other.vbnet'
    },
    'keyword-g': {
      match:
        '(?i)(?<![.!])(Get|GetType|Global|GoSub|GoTo|Group\\s+By|Group)\\b',
      name: 'keyword.other.vbnet'
    },
    'keyword-h': {
      match: '(?i)(?<![.!])(Handles)\\b',
      name: 'keyword.other.vbnet'
    },
    'keyword-i': {
      match:
        '(?i)(?<![.!])(If|Implements|Imports|In|(?<=Option)\\s+Infer|Inherits|Integer|Interface|Into|Is|IsNot|Iterator(?=\\s+(Function|Property)))\\b',
      name: 'keyword.other.vbnet'
    },
    'keyword-j': {match: '(?i)(?<![.!])(Join)\\b', name: 'keyword.other.vbnet'},
    'keyword-k': {match: '(?i)(?<![.!])(Key)\\b', name: 'keyword.other.vbnet'},
    'keyword-l': {
      match: '(?i)(?<![.!])(Let|Lib|Like|Long|Loop)\\b',
      name: 'keyword.other.vbnet'
    },
    'keyword-m': {
      match:
        '(?i)(?<![.!])(Me|Mod|Module|MustInherit|MustOverride|MyBase|MyClass)\\b',
      name: 'keyword.other.vbnet'
    },
    'keyword-n': {
      match:
        '(?i)(?<![.!])(NameOf|Namespace|Narrowing|New|Next|Not|Nothing|NotInheritable|NotOverridable)\\b',
      name: 'keyword.other.vbnet'
    },
    'keyword-o': {
      match:
        '(?i)(?<![.!])(Object|Of|(?<=Explicit|Infer|Strict)\\s+Off|On|Operator|Option|Optional|Or|Order\\s+By|OrElse|Out|Overloads|Overridable|Overrides)\\b',
      name: 'keyword.other.vbnet'
    },
    'keyword-p': {
      match:
        '(?i)(?<![.!])(ParamArray|Partial(?=\\s+(Class|Structure|Module|Interface))|Partial(?=\\s+(Class|Structure|Module|Interface|Sub|Public|Private|Protected|Friend|MustInherit|NotInheritable|NotOverrideable|Overridable|Shared))|Preserve|Private|Property|Protected|Public)\\b',
      name: 'keyword.other.vbnet'
    },
    'keyword-r': {
      match:
        '(?i)(?<![.!])(RaiseEvent|ReadOnly|ReDim|(?<=#|#End\\s)Region|RemoveHandler|Resume|Return)\\b',
      name: 'keyword.other.vbnet'
    },
    'keyword-s': {
      match:
        '(?i)(?<![.!])(Select|Set|Shadows|Shared|Short|Single|Skip|Static|Step|Stop|(?<=Option)\\s+Strict|String|Structure|Sub|SyncLock)\\b',
      name: 'keyword.other.vbnet'
    },
    'keyword-t': {
      match:
        '(?i)(?<![.!])(Take|(?<=Compare)\\s+Text|Then|Throw|To|True|Try|TryCast|TypeOf)\\b',
      name: 'keyword.other.vbnet'
    },
    'keyword-u': {
      match: '(?i)(?<![.!])(Unicode|Until|Using)\\b',
      name: 'keyword.other.vbnet'
    },
    'keyword-v': {
      match: '(?i)(?<![.!])(Variant)\\b',
      name: 'keyword.other.vbnet'
    },
    'keyword-w': {
      match:
        '(?i)(?<![.!])(Wend|When|Where|While|Widening|With|WithEvents|WriteOnly)\\b',
      name: 'keyword.other.vbnet'
    },
    'keyword-x': {match: '(?i)(?<![.!])(Xor)\\b', name: 'keyword.other.vbnet'},
    'keyword-y': {
      match: '(?i)(?<![.!])(Yield)\\b',
      name: 'keyword.other.vbnet'
    },
    'string-literal': {
      match:
        '(["\\x{201C}\\x{201D}]([^"\\x{201C}\\x{201D}]|["\\x{201C}\\x{201D}]{2})*["\\x{201C}\\x{201D}])',
      name: 'string.quoted.double.vbnet'
    },
    symbol: {
      match: '(([&*+\\-/\\\\^<=>])|([(){}!#,.:]|((?<= )_(?=\\s$)))|\\?)',
      name: 'variable.other.namespace-alias.vbnet'
    }
  },
  scopeName: 'source.vbnet'
}

export default grammar
