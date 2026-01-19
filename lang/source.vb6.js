// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/serkonda7/vscode-vba>
// and licensed `mpl-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: [],
  patterns: [
    {include: '#module_metadata'},
    {include: '#comments'},
    {include: '#functions'},
    {include: '#keywords'},
    {include: '#numbers'},
    {include: '#storage'},
    {include: '#strings'},
    {include: '#types'},
    {match: '_(?=\\s*\\n)', name: 'constant.other.vb6'}
  ],
  repository: {
    comments: {
      begin:
        "(?=')|(?:^(?:(\\d*)\\s*|[a-zA-Z][a-zA-Z0-9]{0,254}:\\s*)|:\\s*)(?=(?i:Rem ))",
      beginCaptures: {1: {name: 'constant.numeric.decimal'}},
      end: '(?<!\\s_)$\\n',
      patterns: [
        {match: "\\'.*", name: 'comment.line.quote'},
        {match: 'Rem .*', name: 'comment.line.rem'},
        {match: '^.*', name: 'comment.line.continuation'}
      ]
    },
    functions: {
      begin: '(?i:\\b(Call|Function|Sub) )',
      beginCaptures: {1: {name: 'keyword.other.vb6'}},
      end: '\\(|(?=\\n)',
      patterns: [
        {
          match: '(?i:\\b([a-zA-Z][a-zA-Z0-9_]*)\\b)',
          name: 'entity.name.function.vb6'
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match:
            '(?i:\\b(Do( While| Until)?|While|Case( Else)?|Else(If)?|For( Each)?|(I)?If|In|New|(Select )?Case|Then|To|Step|With)\\b)',
          name: 'keyword.conditional.vb6'
        },
        {
          match:
            '(?i:\\b(End( )?If|End (Select|With)|Next|Wend|Loop( While| Until)?|Exit (For|Do|While))\\b)',
          name: 'keyword.conditional.end.vb6'
        },
        {
          match:
            '(?i:\\b(Exit (Function|Property|Sub)|As|And|By(Ref|Val)|Goto|Is|Like|Mod|Not|On Error|Optional|Or|Resume Next|Stop|Xor|Eqv|Imp|TypeOf|AddressOf)\\b|(\\b(End)\\b(?=\\n)))',
          name: 'keyword.control.vb6'
        },
        {
          match:
            '(?i:\\b(Open|Close|Line Input|Lock|Unlock|Print|Seek|Get|Put|Write)\\b)',
          name: 'keyword.io.vb6'
        },
        {match: '(?i:\\b(Input)(?= \\#))', name: 'keyword.io.vb6'},
        {
          match:
            '(?i:\\b(Attribute|Call|End (Function|Property|Sub|Type|Enum)|(Const|Function|Property|Sub|Type|Enum)|Declare|WithEvents|Event|RaiseEvent|Implements)\\b)',
          name: 'keyword.other.vb6'
        },
        {
          match: '(?i)\\bOption (Base [01]|Compare (Binary|Text)|Explicit)\\b',
          name: 'keyword.other.option.vb6'
        },
        {
          match:
            '(?i)\\b(DefBool|DefByte|DefInt|DefLng|DefLngLng|DefLngPtr|DefCur|DefSng|DefDbl|DefDec|DefDate|DefStr|DefObj|DefVar)\\b',
          name: 'keyword.other.deftype.vb6'
        },
        {
          match: '(?i:\\b(Private|Public|Global|Friend)\\b)',
          name: 'keyword.other.visibility.vb6'
        },
        {
          match: '(?i)\\b(Empty|False|Nothing|Null|True)\\b',
          name: 'constant.language.vb6'
        }
      ]
    },
    module_metadata: {
      patterns: [
        {include: '#comments'},
        {include: '#module_version'},
        {include: '#attribute_block'}
      ],
      repository: {
        attribute_block: {
          begin: '(?i)^\\s*(BEGIN)\\b',
          beginCaptures: {0: {name: 'keyword.other.vb6'}},
          end: '(?i)^\\s*(END)\\b',
          endCaptures: {0: {name: 'keyword.other.vb6'}},
          name: 'meta.module.block.vb6',
          patterns: [{include: 'source.vb6'}]
        },
        module_version: {
          captures: {1: {patterns: [{include: '#numbers'}]}},
          match: '(?i)^VERSION\\s+([.\\d]+)\\s+CLASS',
          name: 'meta.module.header.vb6'
        }
      }
    },
    numbers: {
      patterns: [
        {
          match:
            '(?i)\\#((Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)|[0-9]{1,2})(-|\\/)[0-9]{1,2}((-|\\/)[0-9]{1,4})?\\#',
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
          name: 'storage.modifier.vb6'
        }
      ]
    },
    strings: {
      patterns: [{match: '\\"[^\\n\\r\\"]*"', name: 'string.quoted.double'}]
    },
    types: {
      patterns: [
        {
          match:
            '(?i)\\b(Any|Byte|Boolean|Currency|Collection|Date|Double|Integer|Long|Object|Single|String|Variant)\\b',
          name: 'support.type.builtin.vb6'
        },
        {
          captures: {1: {name: 'support.type'}},
          match: '(?i)(?<= As )([a-zA-Z][a-zA-Z0-9_]*)'
        }
      ]
    }
  },
  scopeName: 'source.vb6'
}

export default grammar
