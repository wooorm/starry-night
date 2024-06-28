// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/adamint/tlv-vscode>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.tlv'],
  names: ['tl-verilog'],
  patterns: [
    {
      match:
        '\\b(automatic|cell|config|deassign|defparam|design|disable|edge|endconfig|endgenerate|endspecify|endtable|endtask|event|generate|genvar|ifnone|incdir|instance|liblist|library|localparam|macromodule|negedge|noshowcancelled|posedge|pulsestyle_onevent|pulsestyle_ondetect|real|realtime|scalared|showcancelled|specify|specparam|table|task|time|use|vectored|new)\\b',
      name: 'keyword.other.tlverilog'
    },
    {match: '@\\b(\\d+)\\b', name: 'entity.name.stage.tlverilog'},
    {match: '\\|\\b([a-zA-Z0-9_]+)\\b', name: 'entity.name.pipe.tlverilog'},
    {match: '\\t', name: 'invalid.illegal.tlverilog'},
    {
      match: '>([a-zA-Z][a-zA-Z0-9_]+)',
      name: 'entity.name.hierarchy.tlverilog'
    },
    {match: '\\/([a-zA-Z0-9_]+)', name: 'entity.name.hierarchy.tlverilog'},
    {
      match: '\\?[\\$\\*][a-zA-Z0-9_]+',
      name: 'keyword.control.conditional.tlverilog'
    },
    {
      match: '\\$\\b([a-zA-Z_][a-zA-Z0-9_]+)\\b',
      name: 'variable.other.tlverilog'
    },
    {match: '%([+-]\\d+|\\w+)', name: 'entity.name.alignment.tlverilog'},
    {match: '\\b([mM]4\\+\\w+)', name: 'support.macro.tlverilog'},
    {
      match: '^\\s*\\\\(TLV.*|SV.*|m4_TLV_version.*)$',
      name: 'keyword.region.tlverilog'
    },
    {match: '\\*\\b([a-zA-Z_][a-zA-Z0-9_]+)\\b', name: 'variable.sv.tlverilog'},
    {
      match: '\\#\\b([a-zA-Z_][a-zA-Z0-9_]+)\\b',
      name: 'constant.other.tlverilog'
    },
    {
      match: '(<<|<>|>>-?)[a-zA-Z0-9_]+',
      name: 'entity.name.alignment.tlverilog'
    },
    {
      match: '\\b(#|@|begin|end|fork|join|join_any|join_none|forkjoin|{|})\\b',
      name: 'keyword.other.tlverilog'
    },
    {
      match:
        '\\b(initial|always|wait|force|release|assign|always_comb|always_ff|always_latch|forever|repeat|while|for|if|iff|else|case|casex|casez|default|endcase|return|break|continue|do|foreach|randomize|with|inside|dist|clocking|cover|coverpoint|property|bins|binsof|illegal_bins|ignore_bins|randcase|modport|matches|solve|static|assert|assume|before|expect|bind|extends|sequence|var|cross|ref|first_match|srandom|time|struct|packed|final|chandle|alias|tagged|extern|throughout|timeprecision|timeunit|priority|type|union|unique|uwire|wait_order|triggered|randsequence|import|export|context|pure|intersect|wildcard|within|virtual|local|const|typedef|enum|protected|this|super|endmodule|endfunction|endprimitive|endclass|endpackage|endsequence|endprogram|endclocking|endproperty|endgroup|endinterface)\\b',
      name: 'keyword.control.tlverilog'
    },
    {match: '\\b(std)\\b::', name: 'support.class.tlverilog'},
    {
      match:
        '\\.(atob|atohex|atoi|atooct|atoreal|bintoa|hextoa|itoa|octtoa|realtoa|len|getc|putc|toupper|tolower|compare|icompare|substr|num|exists|first|last|name|index|find|find_first|find_last|find_index|find_first_index|find_last_index|min|max|unique|unique_index|sort|rsort|shuffle|reverse|sum|product|xor|status|kill|self|await|suspend|resume|get|put|peek|try_get|try_peek|try_put|data|eq|neq|next|prev|new|size|delete|empty|pop_front|pop_back|front|back|insert|insert_range|erase|erase_range|set|swap|clear|purge|start|finish)\\b',
      name: 'support.function.tlverilog'
    },
    {
      match: '\\b(get_randstate|set_randstate)\\b',
      name: 'support.function.tlverilog'
    },
    {match: '\\b(null|void)\\b', name: 'support.constant.tlverilog'},
    {
      captures: {
        1: {name: 'keyword.other.tlverilog'},
        2: {name: 'entity.name.type.include.tlverilog'}
      },
      match: '^\\s*(`include)\\s+(["<].*[">])',
      name: 'meta.include.tlverilog'
    },
    {
      match:
        '`(celldefine|default_nettype|define|else|elsif|endcelldefine|endif|ifdef|ifndef|include|line|nounconnected_drive|resetall|timescale|unconnected_drive|undef|begin_\\w+|end_\\w+|remove_\\w+|restore_\\w+)\\b',
      name: 'constant.other.preprocessor.tlverilog'
    },
    {include: '#comments'},
    {
      captures: {
        1: {name: 'storage.type.tlverilog'},
        3: {name: 'entity.name.type.class.tlverilog'}
      },
      match:
        '\\b(function)\\b\\s+(\\[.*\\])?\\s+\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b',
      name: 'meta.definition.tlverilog'
    },
    {
      captures: {
        1: {name: 'storage.type.tlverilog'},
        2: {name: 'entity.name.type.class.tlverilog'}
      },
      match:
        '^\\s*(module|function|primitive|class|package|constraint|interface|covergroup|program)\\s+\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b',
      name: 'meta.definition.tlverilog'
    },
    {include: '#all-types'},
    {match: "'\\s*\\(.+\\)", name: 'keyword.operator.staticcasting.tlverilog'},
    {
      begin: "'{",
      beginCaptures: {
        0: {name: 'keyword.operator.unpackaedarrayassignment.begin.tlverilog'}
      },
      end: '}',
      endCaptures: {
        0: {name: 'keyword.operator.unpackaedarrayassignment.end.tlverilog'}
      },
      name: 'keyword.operator.unpackedarrayassignment.tlverilog',
      patterns: [{match: '.', name: 'constant.character.escape.tlverilog'}]
    },
    {
      match:
        '\\b(output|input|inout|and|nand|nor|or|xor|xnor|buf|not|bufif[01]|notif[01]|r?[npc]mos|tran|r?tranif[01]|pullup|pulldown)\\b',
      name: 'support.type.tlverilog'
    },
    {
      match:
        "(\\b\\d+)?'[sS]?([bB]\\s*[0-1_xXzZ?]+|[oO]\\s*[0-7_xXzZ?]+|[dD]\\s*[0-9_xXzZ?]+|[hH]\\s*[0-9a-fA-F_xXzZ?]+|[0-1xz])((e|E)(\\+|-)?[0-9]+)?\\b",
      name: 'constant.numeric.tlverilog'
    },
    {include: '#strings'}
  ],
  repository: {
    'all-types': {
      patterns: [
        {include: '#storage-type-tlverilog'},
        {include: '#storage-modifier-tlverilog'}
      ]
    },
    comments: {
      patterns: [
        {
          begin: '/\\*',
          captures: {0: {name: 'punctuation.definition.comment.tlverilog'}},
          end: '\\*/',
          name: 'comment.block.tlverilog'
        },
        {
          captures: {1: {name: 'punctuation.definition.comment.tlverilog'}},
          match: '(//).*$\\n?',
          name: 'comment.line.double-slash.tlverilog'
        }
      ]
    },
    'storage-modifier-tlverilog': {
      match:
        '\\b(signed|unsigned|small|medium|large|supply[01]|strong[01]|pull[01]|weak[01]|highz[01])\\b',
      name: 'storage.modifier.tlverilog'
    },
    'storage-type-tlverilog': {
      match:
        '\\b(wire|tri|tri[01]|supply[01]|wand|triand|wor|trior|trireg|reg|parameter|integer|rand|randc|int|longint|shortint|logic|bit|byte|shortreal|string)\\b',
      name: 'storage.type.tlverilog'
    },
    strings: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.tlverilog'}
          },
          end: '"',
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.tlverilog'}
          },
          name: 'string.quoted.double.tlverilog',
          patterns: [
            {match: '\\\\.', name: 'constant.character.escape.tlverilog'}
          ]
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.tlverilog'}
          },
          end: "'",
          endCaptures: {
            0: {name: 'punctuation.definition.string.end.tlverilog'}
          },
          name: 'string.quoted.single.tlverilog',
          patterns: [
            {match: '\\\\.', name: 'constant.character.escape.tlverilog'}
          ]
        }
      ]
    }
  },
  scopeName: 'source.tlverilog'
}

export default grammar
