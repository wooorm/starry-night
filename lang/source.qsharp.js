// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/microsoft/qsharp-compiler>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.qs'],
  names: ['q#', 'qsharp'],
  patterns: [
    {include: '#comments'},
    {include: '#keywords'},
    {include: '#library'},
    {include: '#operations'},
    {include: '#types'},
    {include: '#constants'},
    {include: '#strings'}
  ],
  repository: {
    comments: {
      patterns: [
        {match: '\\/\\/.*$', name: 'comment.line.double-slash'},
        {match: '\\/\\/\\/.*$', name: 'comment.documentation'}
      ]
    },
    constants: {
      patterns: [
        {
          match: '\\b(true|false|Pauli(I|X|Y|Z)|One|Zero)\\b',
          name: 'constant.language.qsharp'
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match:
            '\\b(use|using|borrow|borrowing|mutable|let|set|if|elif|else|repeat|until|fixup|for|in|while|return|fail|within|apply)\\b',
          name: 'keyword.control.qsharp'
        },
        {match: '\\b(new|not|and|or|w/)\\b', name: 'keyword.other.qsharp'},
        {
          match:
            '\\b(abstract|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|do|double)\\b',
          name: 'invalid.illegal.ad.qsharp'
        },
        {
          match:
            '\\b(enum|event|explicit|extern|finally|fixed|float|foreach|goto|implicit|int|interface|lock|long)\\b',
          name: 'invalid.illegal.el.qsharp'
        },
        {
          match:
            '\\b(null|object|operator|out|override|params|private|protected|public|readonly|ref|sbyte|sealed|short|sizeof|stackalloc)\\b',
          name: 'invalid.illegal.ns.qsharp'
        },
        {
          match:
            '\\b(static|string|struct|switch|this|throw|try|typeof|unit|ulong|unchecked|unsafe|ushort|virtual|void|volatile)\\b',
          name: 'invalid.illegal.sv.qsharp'
        }
      ]
    },
    library: {
      patterns: [
        {
          match:
            '\\b(I|X|Y|Z|H|HY|S|T|SWAP|CNOT|CCNOT|MultiX|R|RFrac|Rx|Ry|Rz|R1|R1Frac|Exp|ExpFrac|Measure|M|MultiM)\\b',
          name: 'support.function.quantum.qsharp'
        },
        {
          match: '\\b(Message|Length|Floor)\\b',
          name: 'support.function.builtin.qsharp'
        }
      ]
    },
    operations: {
      patterns: [
        {
          match:
            '\\b(namespace|open|as|internal|newtype|operation|function|body|(a|A)djoint|(c|C)ontrolled|self|auto|distribute|invert|intrinsic)\\b',
          name: 'keyword.other.qsharp'
        }
      ]
    },
    strings: {
      patterns: [
        {
          begin: '(\\$|)"',
          end: '"',
          name: 'string.quoted.double.qsharp',
          patterns: [{match: '\\\\.', name: 'constant.character.escape.qsharp'}]
        }
      ]
    },
    types: {
      patterns: [
        {
          match:
            '\\b(Int|BigInt|Double|Bool|Qubit|Pauli|Result|Range|String|Unit|Ctl|Adj|is)\\b',
          name: 'storage.type.qsharp'
        }
      ]
    }
  },
  scopeName: 'source.qsharp'
}

export default grammar
