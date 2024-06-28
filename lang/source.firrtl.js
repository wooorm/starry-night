// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/chipsalliance/firrtl-syntax>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.fir'],
  names: ['firrtl'],
  patterns: [
    {include: '#version'},
    {include: '#circuit'},
    {include: '#declaration'},
    {include: '#statement'},
    {include: '#comment'},
    {include: '#file_info'}
  ],
  repository: {
    circuit: {
      captures: {
        1: {name: 'storage.type.class.firrtl'},
        2: {name: 'entity.name.type.firrtl'}
      },
      match: '^(circuit)\\s+(\\w+)\\s*:'
    },
    comment: {match: ';.*$', name: 'comment.line.character.firrtl'},
    declaration: {
      patterns: [
        {include: '#module'},
        {include: '#extmodule'},
        {include: '#layer'},
        {include: '#type_decl'},
        {include: '#port'},
        {include: '#wire_or_register'},
        {include: '#node'},
        {include: '#instance'},
        {include: '#memory'}
      ]
    },
    expression: {
      patterns: [
        {include: '#expression_literal'},
        {include: '#expression_primop'},
        {include: '#expression_primop_deprecated'},
        {include: '#property_literal'},
        {include: '#format_string'}
      ]
    },
    expression_literal: {
      captures: {1: {name: 'constant.numeric.firrtl'}},
      match: '(([US]Int|Analog)(<(\\d+)>)?\\(.+\\))'
    },
    expression_primop: {
      begin:
        '(add|sub|mul|div|rem|lt|leq|gt|geq|eq|neq|pad|asAsyncReset|asUInt|asSInt|asClock|shl|shr|dshl|dshr|cvt|neg|not|and|or|xor|andr|orr|xorr|cat|bits|head|tail|mux|probe|rwprobe|read)\\(',
      beginCaptures: {1: {name: 'keyword.operator.firrtl'}},
      end: '\\)',
      patterns: [{include: '#expression'}]
    },
    expression_primop_deprecated: {
      begin: '(asFixedPoint|bpshl|bpshr|bpset|validif)\\(',
      beginCaptures: {1: {name: 'invalid.deprecated.firrtl'}},
      end: '\\)',
      patterns: [{include: '#expression'}]
    },
    extmodule: {
      captures: {
        1: {name: 'storage.modifier.firrtl'},
        2: {name: 'storage.type.class.firrtl'},
        3: {name: 'entity.name.type.firrtl'}
      },
      match: '(extmodule)\\s+(\\w+)\\s*:'
    },
    file_info: {match: '(@\\[.*\\])', name: 'comment.line.character.firrtl'},
    format_string: {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.firrtl',
      patterns: [
        {match: '%[bdx%]', name: 'variable.other.firrtl'},
        {match: '\\\\[nt\\\\"\']', name: 'variable.other.firrtl'}
      ]
    },
    instance: {
      captures: {1: {name: 'entity.name.type.firrtl'}},
      match: 'inst\\s+(\\w+)\\s+of\\s+',
      name: 'keyword.other.firrtl'
    },
    layer: {
      captures: {
        1: {name: 'storage.type.class.firrtl'},
        2: {name: 'entity.name.type.firrtl'},
        3: {name: 'storage.modifier.firrtl'}
      },
      match: '(layer)\\s+(\\w+)\\s*,?\\s*(\\w*)'
    },
    memory: {
      captures: {
        1: {name: 'storage.type.class.firrtl'},
        2: {name: 'entity.name.type.firrtl'}
      },
      match: '(mem)\\s+(\\w+)'
    },
    module: {
      captures: {
        1: {name: 'storage.modifier.firrtl'},
        2: {name: 'storage.type.class.firrtl'},
        3: {name: 'entity.name.type.firrtl'}
      },
      match: '^\\s*(public\\s+)?(module)\\s+(\\w+)\\s*:'
    },
    node: {
      captures: {
        1: {name: 'storage.type.firrtl'},
        2: {name: 'entity.name.type.firrtl'}
      },
      match: '(node)\\s+(\\w+)\\s*'
    },
    port: {
      begin: '(input|output)\\s+(\\w+)\\s*:',
      beginCaptures: {
        1: {name: 'storage.type.port.firrtl'},
        2: {name: 'entity.name.type.firrtl'}
      },
      end: '$',
      patterns: [
        {include: '#type'},
        {include: '#comment'},
        {include: '#file_info'}
      ]
    },
    property_literal: {
      match: 'Integer\\((\\d+)\\)',
      name: 'constant.numeric.firrtl'
    },
    statement: {
      patterns: [
        {include: '#statement_generic'},
        {include: '#statement_memory_config'},
        {include: '#statement_extmodule_config'}
      ]
    },
    statement_extmodule_config: {
      patterns: [
        {
          captures: {1: {name: 'keyword.other.firrtl'}},
          match: '(parameter)\\s+(\\w+)'
        }
      ]
    },
    statement_generic: {
      begin:
        '(connect|invalidate|attach\\(|propassign|skip|when|else(\\s+when)?|stop|printf|assert|assume|cover|layerblock|define|force(_initial)?|release(_initial)?)',
      beginCaptures: {1: {name: 'keyword.other.firrtl'}},
      end: '$',
      patterns: [
        {include: '#expression'},
        {include: '#comment'},
        {include: '#file_info'}
      ]
    },
    statement_memory_config: {
      patterns: [
        {
          begin: '(data-type)\\s*=>',
          beginCaptures: {1: {name: 'keyword.other.firrtl'}},
          end: '$',
          patterns: [{include: '#type'}]
        },
        {
          captures: {1: {name: 'keyword.other.firrtl'}},
          match:
            '(depth|reader|writer|read-latency|write-latency)\\s*=>\\s*\\w+'
        },
        {
          captures: {
            1: {name: 'keyword.other.firrtl'},
            2: {name: 'keyword.other.firrtl'}
          },
          match: '(read-under-write)\\s*=>\\s*(old|new|undefined)'
        }
      ]
    },
    type: {
      patterns: [
        {include: '#type_ground_nowidth'},
        {include: '#type_ground_width'},
        {include: '#type_bundle'},
        {include: '#type_probe'},
        {include: '#type_enum'},
        {include: '#type_property'}
      ]
    },
    type_bundle: {
      begin: '(const\\s+)?{',
      captures: {1: {name: 'storage.modifier.firrtl'}},
      end: '}',
      name: 'meta.type.bundle.firrtl',
      patterns: [{include: '#type_bundle_field'}, {include: '#type'}]
    },
    type_bundle_field: {
      captures: {
        1: {name: 'storage.modifier.firrtl'},
        2: {name: 'entity.name.type.firrtl'}
      },
      match: '(flip\\s+)?(\\w+)\\s*:'
    },
    type_decl: {
      begin: '(type)\\s+(\\w+)\\s*=',
      beginCaptures: {
        1: {name: 'storage.type.port.firrtl'},
        2: {name: 'entity.name.type.firrtl'}
      },
      end: '$',
      patterns: [{include: '#type'}, {include: '#comment'}]
    },
    type_enum: {
      begin: '({\\|)',
      captures: {1: {name: 'storage.type.firrtl'}},
      end: '(\\|})',
      patterns: [{include: '#type'}]
    },
    type_ground_nowidth: {
      captures: {1: {name: 'storage.modifier.firrtl'}},
      match: '(const\\s+)?(Clock|Reset|AsyncReset)',
      name: 'storage.type.firrtl'
    },
    type_ground_width: {
      captures: {
        1: {name: 'storage.modifier.firrtl'},
        4: {name: 'constant.numeric.firrtl'}
      },
      match: '(const\\s+)?([US]Int|Analog)(<(\\d+)>)?',
      name: 'storage.type.firrtl'
    },
    type_probe: {
      begin: '((RW)?Probe<)',
      captures: {1: {name: 'storage.type.firrtl'}},
      end: '(>)',
      patterns: [{include: '#type'}]
    },
    type_property: {match: 'Integer', name: 'storage.type.firrtl'},
    version: {
      match: '^FIRRTL version \\d+\\.\\d+\\.\\d+$',
      name: 'comment.line.character.firrtl'
    },
    wire_or_register: {
      begin: '(wire|reg|regreset)\\s+(\\w+)\\s*:',
      beginCaptures: {
        1: {name: 'storage.type.firrtl'},
        2: {name: 'entity.name.type.firrtl'}
      },
      end: '$',
      patterns: [
        {include: '#type'},
        {include: '#comment'},
        {include: '#file_info'}
      ]
    }
  },
  scopeName: 'source.firrtl'
}

export default grammar
