// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.bsv'],
  names: ['bluespec', 'bluespec-bsv', 'bsv'],
  patterns: [
    {
      captures: {
        1: {name: 'keyword.control.import.bsv'},
        2: {name: 'entity.name.package.bsv'}
      },
      match: '^\\s*(import|export|package)\\s+\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b',
      name: 'meta.entity.package.bsv'
    },
    {
      captures: {
        1: {name: 'keyword.other.bsv'},
        2: {name: 'entity.name.type.instance.bsv'},
        3: {name: 'meta.module.parameters.bsv'},
        4: {name: 'keyword.other.bsv'}
      },
      match:
        '^\\s*(defparam)\\s+([a-zA-Z_][a-zA-Z0-9_]*)(.[a-zA-Z_][a-zA-Z0-9_]*)\\s*(=)',
      name: 'meta.definition.defparam.bsv'
    },
    {
      match:
        '\\b(automatic|cell|config|deassign|defparam|design|disable|edge|endconfig|endgenerate|endspecify|endtable|endtask|event|generate|genvar|ifnone|incdir|include|liblist|library|localparam|macromodule|negedge|noshowcancelled|posedge|pulsestyle_onevent|pulsestyle_ondetect|real|realtime|scalared|showcancelled|specify|specparam|table|task|time|use|vectored)\\b',
      name: 'keyword.other.bsv'
    },
    {
      match: '\\b(initial|always|wait|force|release|assign)\\b',
      name: 'keyword.control.bsv'
    },
    {match: '\\b(begin|end|fork|join)\\b', name: 'keyword.other.bsv'},
    {
      match:
        '\\b(matches|action|endaction|actionvalue|endactionvalue|ancestor|deriving|return|match|par|endpar|provisos|dependencies|determines|seq|endseq|schedule|port|clock|reset|no_reset|clocked_by|reset_by|default_clock|default_reset|output_clock|output_reset|input_clock|input_reset|same_family|import|numeric|type)\\b',
      name: 'keyword.control.bsv'
    },
    {
      match: '\\b(TAdd|TSub|TLog|TExp|TMul|TDiv|TMin|TMax)\\b',
      name: 'keyword.typesystem.math.bsv'
    },
    {
      match:
        '\\b(Bits|DefaultValue|Eq|Ord|Bounded|Arith|Literal|Bitwise|BitReduction|BitExtend|FShow|IsModule|Add|Max|Log|Mul|Div)\\b',
      name: 'keyword.typesystem.typeclass.bsv'
    },
    {
      match:
        '\\b(forever|repeat|while|for|if|else|case|casex|casez|default|endcase)\\b',
      name: 'keyword.control.bsv'
    },
    {match: '\\b(endpackage)\\b', name: 'keyword.control.import.bsv'},
    {
      captures: {
        1: {name: 'meta.preprocessor.bsv'},
        2: {name: 'entity.name.type.include.bsv'}
      },
      match: '^\\s*(`include)\\s+(["<].*[">])',
      name: 'meta.include.bsv'
    },
    {
      captures: {
        1: {name: 'meta.preprocessor.bsv'},
        2: {name: 'constant.other.define.bsv'}
      },
      match:
        '^\\s*(`ifdef|`ifndef|`undef|`define)\\s+([a-zA-Z_][a-zA-Z0-9_]*)\\b',
      name: 'meta.preprocessor.ifdef.bsv'
    },
    {
      match:
        '`(celldefine|default_nettype|define|else|elsif|endcelldefine|endif|ifdef|ifndef|include|line|nounconnected_drive|resetall|timescale|unconnected_drive|undef)\\b',
      name: 'meta.preprocessor.bsv'
    },
    {match: '[.][_a-zA-Z0-9]+', name: 'meta.module.parameters.bsv'},
    {match: '\\b(True|False)\\b', name: 'constant.language.bsv'},
    {
      match: '`\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b',
      name: 'constant.other.define.bsv'
    },
    {include: '#comments'},
    {include: '#pragma-compiler-bsv'},
    {
      match:
        '\\b(let|module|endmodule|rule|endrule|rules|endrules|interface|endinterface|method|endmethod|function|endfunction|instance|endinstance|typeclass|endtypeclass|primitive|endprimitive)\\b',
      name: 'storage.type.bsv'
    },
    {
      captures: {
        1: {name: 'entity.name.state.bsv'},
        2: {name: 'keyword.operator.bitwise.bsv'}
      },
      match:
        '(?:^|\\{|,)\\s*\\b(?!endmodule|endrule|endinterface|endmethod|endfunction|endinstance|endtypeclass)\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b\\s*(:)(?!:)\\s*',
      name: 'meta.case.bsv'
    },
    {include: '#all-types'},
    {
      match: '(==|===|!=|!==|<=|>=|<|>)',
      name: 'keyword.operator.comparison.bsv'
    },
    {match: '(\\-|\\+|\\*|\\/|%)', name: 'keyword.operator.arithmetic.bsv'},
    {match: '(!|&&|\\|\\||\\bor\\b)', name: 'keyword.operator.logical.bsv'},
    {match: '(&|\\||\\^|~|<<|>>|\\?|:)', name: 'keyword.operator.bitwise.bsv'},
    {match: '({|})', name: 'keyword.operator.parenthesis.curly.bsv'},
    {match: '(\\(|\\))', name: 'keyword.operator.parenthesis.round.bsv'},
    {match: '(\\[|\\])', name: 'keyword.operator.parenthesis.square.bsv'},
    {match: '([;,])', name: 'keyword.delimiter.bsv'},
    {match: '(#|@|=)', name: 'keyword.other.bsv'},
    {
      match:
        '\\b(output|input|inout|and|nand|nor|or|xor|xnor|buf|not|bufif[01]|notif[01]|r?[npc]mos|tran|r?tranif[01]|pullup|pulldown)\\b',
      name: 'support.type.bsv'
    },
    {
      match: '\\b(?i:(\\d+\\.\\d*(e[\\-\\+]?\\d+)?))(?=[^a-zA-Z_])',
      name: 'constant.numeric.real.bsv'
    },
    {
      match:
        "((\\b\\d+)?'s?([bB]\\s*(([0-1_xXzZ?]+)|(`[A-Z]+[_0-9a-zA-Z]*))|[oO]\\s*(([0-7_xXzZ?]+)|(`[A-Z]+[_0-9a-zA-Z]*))|[dD]\\s*(([0-9_xXzZ?]+)|(`[A-Z]+[_0-9a-zA-Z]*))|[hH]\\s*(([0-9a-fA-F_xXzZ?]+)|(`[A-Z]+[_0-9a-zA-Z]*)))((e|E)(\\+|-)?[0-9]+)?\\b)|(\\b\\d+\\b)",
      name: 'constant.numeric.bsv'
    },
    {include: '#strings'},
    {match: '\\$\\b([a-zA-Z_][a-zA-Z0-9_]*)\\b', name: 'support.function.bsv'}
  ],
  repository: {
    'all-types': {
      patterns: [
        {include: '#storage-type-bsv'},
        {include: '#storage-type-standard-bsv'},
        {include: '#storage-modifier-bsv'}
      ]
    },
    comments: {
      patterns: [
        {
          begin: '/\\*',
          captures: {0: {name: 'punctuation.definition.comment.bsv'}},
          end: '\\*/',
          name: 'comment.block.bsv'
        },
        {
          captures: {1: {name: 'punctuation.definition.comment.bsv'}},
          match: '(//).*$\\n?',
          name: 'comment.line.double-slash.bsv'
        }
      ]
    },
    'pragma-compiler-bsv': {
      patterns: [
        {
          begin: '\\(\\*',
          captures: {0: {name: 'punctuation.definition.comment.bsv'}},
          end: '\\*\\)',
          name: 'pragma.compiler.bsv'
        }
      ]
    },
    'storage-modifier-bsv': {
      match:
        '\\b(signed|unsigned|small|medium|large|supply[01]|strong[01]|pull[01]|weak[01]|highz[01])\\b',
      name: 'storage.modifier.bsv'
    },
    'storage-type-bsv': {
      match:
        '\\b(wire|tri|tri[01]|supply[01]|wand|triand|wor|trior|trireg|reg|parameter|integer|typedef|struct|enum|tagged|union)\\b',
      name: 'storage.type.bsv'
    },
    'storage-type-standard-bsv': {
      match:
        '\\b(void|Action|ActionValue|Integer|Nat|Real|Inout|Bit|UInt|Int|Bool|Maybe|String|Either|Rules|Module|Clock|Reset|Power|Empty|Array|Reg|RWire|Wire|BypassWire|DWire|PulseWire|ReadOnly|WriteOnly|Vector|List|RegFile|FIFO|FIFOF|Stmt)\\b',
      name: 'storage.type.standard.bsv'
    },
    strings: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {0: {name: 'punctuation.definition.string.begin.bsv'}},
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.bsv'}},
          name: 'string.quoted.double.bsv',
          patterns: [{match: '\\\\.', name: 'constant.character.escape.bsv'}]
        }
      ]
    }
  },
  scopeName: 'source.bsv'
}

export default grammar
