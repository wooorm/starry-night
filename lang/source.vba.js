// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/tiabeast/vscode-vba-json>
// and licensed `mpl-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.frm', '.vba'],
  names: ['vba', 'visual-basic-for-applications'],
  patterns: [
    {include: '#comments'},
    {include: '#keywords'},
    {include: '#metadata'},
    {include: '#numbers'},
    {include: '#storage'},
    {include: '#strings'},
    {include: '#types'},
    {include: '#functions'},
    {match: '_(?=\\s*\\n)', name: 'constant.other.vba'}
  ],
  repository: {
    comments: {
      begin:
        "(?=')|(?:^(?:|(\\d*)\\s*|[a-zA-Z][a-zA-Z0-9]{0,254}:\\s*)|:\\s*)(?=(?i:Rem ))",
      beginCaptures: {1: {name: 'constant.numeric.decimal'}},
      end: '(?<!\\s_)$\n',
      patterns: [
        {match: "'.*", name: 'comment.line.quote'},
        {match: 'Rem .*', name: 'comment.line.rem'},
        {match: '^.*', name: 'comment.line.continuation'}
      ]
    },
    functions: {
      match:
        '(?i:\\b(?:(?<=Call )|(?<=Function )|(?<=Sub ))[a-zA-Z][a-zA-Z0-9_]*\\b)(?=\\(\\)?)',
      name: 'entity.name.function.vba'
    },
    keywords: {
      patterns: [
        {
          match:
            '(?i:\\b(Do(( While)|( Until))?|While|Case( Else)?|Else(If)?|For( Each)?|(I)?If|In|New|(Select )?Case|Then|To|Step|With)\\b)',
          name: 'keyword.conditional.vba'
        },
        {
          match:
            '(?i:\\b(End( )?If|End (Select|With)|Next|Wend|Loop(( While)|( Until))?|Exit (For|Do|While))\\b)',
          name: 'keyword.conditional.end.vba'
        },
        {
          match:
            '(?i:(\\b(Exit (Function|Property|Sub)|As|And|By(Ref|Val)|Goto|Is|Like|Mod|Not|On Error|Optional|Or|Resume Next|Stop|Xor|Eqv|Imp|TypeOf|AddressOf)\\b)|(\\b(End)\\b(?=\\n)))',
          name: 'keyword.control.vba'
        },
        {
          match:
            '(?i:\\b(Open|Close|Line Input|Lock|Unlock|Print|Seek|Get|Put|Write)\\b)',
          name: 'keyword.io.vba'
        },
        {match: '(?i:\\b(Input)(?= #))', name: 'keyword.io.vba'},
        {
          match:
            '(?i:\\b(Attribute|Call|End (Function|Property|Sub|Type|Enum)|(Const|Function|Property|Sub|Type|Enum)|Declare|PtrSafe|WithEvents|Event|RaiseEvent|Implements)\\b)',
          name: 'keyword.other.vba'
        },
        {
          match:
            '(?i)\\bOption (Base [01]|Compare (Binary|Text)|Explicit|Private Module)\\b',
          name: 'keyword.other.option.vba'
        },
        {
          match: '(?i:\\b(Private|Public|Friend)\\b)',
          name: 'keyword.other.visibility.vba'
        },
        {
          match: '(?i)\\b(Empty|False|Nothing|Null|True)\\b',
          name: 'constant.language.vba'
        }
      ]
    },
    metadata: {
      begin: '(?i)^\\s*(BEGIN)\\b',
      beginCaptures: {1: {name: 'keyword.metadata.vba'}},
      end: '(?i)^\\s*(END)\\b',
      endCaptures: {0: {name: 'keyword.metadata.vba'}},
      name: 'metadata.vba',
      patterns: [{include: 'source.vba'}]
    },
    numbers: {
      patterns: [
        {
          match:
            '(?i)#((Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)|[0-9]{1,2})(-|/)[0-9]{1,2}((-|/)[0-9]{1,4})?#',
          name: 'constant.numeric.date'
        },
        {match: '(?<!\\w)-?\\d+(\\.\\d+)?', name: 'constant.numeric.decimal'},
        {match: '(?i)-?&O[0-7]+', name: 'constant.numeric.octal'},
        {match: '(?i)-?&H[0-9A-F]+', name: 'constant.numeric.hexadecimal'}
      ]
    },
    storage: {
      patterns: [
        {
          match:
            '(?i)\\b(Class|Const|Dim|(G|L|S)et|ReDim( Preserve)?|Erase|Static)\\b',
          name: 'storage.modifier.vba'
        }
      ]
    },
    strings: {begin: '"', end: '"', name: 'string.quoted.double'},
    types: {
      patterns: [
        {
          match:
            '(?i)\\b(Any|Byte|Boolean|Currency|Collection|Date|Double|Integer|Long(Long|Ptr)?|Object|Single|String|Variant)\\b',
          name: 'support.type.builtin.vba'
        },
        {
          captures: {1: {name: 'support.type'}},
          match: '(?i)(?<= As )([a-zA-Z][a-zA-Z0-9_]*)'
        }
      ]
    }
  },
  scopeName: 'source.vba'
}

export default grammar
