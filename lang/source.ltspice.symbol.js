// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-pcb>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['ltspice-symbol'],
  patterns: [{include: '#main'}],
  repository: {
    attr: {
      begin: '^\\s*(SYMATTR)(?=\\s|$)',
      beginCaptures: {1: {name: 'storage.type.var.attribute.ltspice.symbol'}},
      end: '$',
      name: 'meta.attribute.ltspice.symbol',
      patterns: [
        {
          captures: {1: {name: 'entity.attribute.name.ltspice.symbol'}},
          match: '\\G\\s+(\\S+)'
        },
        {match: '.+', name: 'string.unquoted.attribute.value.ltspice.symbol'}
      ]
    },
    main: {
      patterns: [
        {include: '#version'},
        {include: '#symbolType'},
        {include: '#shapes'},
        {include: '#window'},
        {include: '#pinAttr'},
        {include: '#pin'},
        {include: '#attr'},
        {include: '#text'}
      ]
    },
    number: {
      patterns: [
        {
          match: '[-+]?[0-9]+\\.[0-9]+',
          name: 'constant.numeric.float.real.decimal.ltspice.symbol'
        },
        {
          match: '[-+]?[0-9]+',
          name: 'constant.numeric.integer.int.decimal.ltspice.symbol'
        }
      ]
    },
    pin: {
      begin: '^\\s*(PIN)(?=\\s|$)',
      beginCaptures: {1: {name: 'keyword.control.pin.ltspice.symbol'}},
      end: '$',
      name: 'meta.pin.ltspice.symbol',
      patterns: [
        {include: '#number'},
        {match: '\\w+', name: 'constant.language.pin-alignment.ltspice.symbol'}
      ]
    },
    pinAttr: {
      begin: '^\\s*(PINATTR)(?=\\s|$)',
      beginCaptures: {1: {name: 'storage.type.var.attribute.ltspice.symbol'}},
      end: '$',
      name: 'meta.pin.attribute.ltspice.symbol',
      patterns: [
        {
          captures: {
            1: {name: 'entity.pin.attribute.name.ltspice.symbol'},
            2: {patterns: [{include: '#number'}]}
          },
          match: '\\G\\s+(SpiceOrder)\\s+(\\d+)',
          patterns: [{include: '#number'}]
        },
        {
          captures: {1: {name: 'entity.attribute.name.ltspice.symbol'}},
          match: '\\G\\s+(\\S+)'
        },
        {
          captures: {
            1: {
              name: 'punctuation.definition.brace.square.bracket.begin.ltspice.symbol'
            },
            2: {
              patterns: [
                {
                  match: ':',
                  name: 'punctuation.delimiter.separator.colon.key-value.ltspice.symbol'
                },
                {include: '#number'}
              ]
            },
            3: {
              name: 'punctuation.definition.brace.square.bracket.begin.ltspice.symbol'
            }
          },
          match: '(\\[)([^\\]]+)(\\])'
        },
        {
          match: '[^\\s\\[]+',
          name: 'string.unquoted.attribute.value.ltspice.symbol'
        }
      ]
    },
    shapes: {
      begin: '^\\s*(ARC|LINE|CIRCLE|RECTANGLE)(?=\\s|$)',
      beginCaptures: {1: {name: 'storage.type.var.shape.ltspice.symbol'}},
      end: '$',
      name: 'meta.shape.${1:/downcase}.ltspice.symbol',
      patterns: [
        {
          match: '\\G\\s*(?!\\d)(\\w+)',
          name: 'variable.parameter.type.ltspice.symbol'
        },
        {include: '#number'}
      ]
    },
    symbolType: {
      begin: '^\\s*(SymbolType)(?=\\s|$)',
      beginCaptures: {1: {name: 'keyword.control.symbol-type.ltspice.symbol'}},
      end: '$',
      name: 'meta.symbol-type.ltspice.symbol',
      patterns: [
        {
          match: '[A-Za-z_$]+',
          name: 'constant.language.symbol-type.ltspice.symbol'
        }
      ]
    },
    text: {
      begin: '^\\s*(TEXT)(?=\\s|$)',
      beginCaptures: {1: {name: 'storage.type.var.text.ltspice.symbol'}},
      end: '$',
      name: 'meta.text.ltspice.symbol',
      patterns: [
        {
          captures: {
            1: {
              name: 'meta.vector.x-axis.ltspice.symbol',
              patterns: [{include: '#number'}]
            },
            2: {
              name: 'meta.vector.y-axis.ltspice.symbol',
              patterns: [{include: '#number'}]
            },
            3: {name: 'constant.language.text-alignment.ltspice.symbol'},
            4: {
              name: 'meta.text-size.ltspice.symbol',
              patterns: [{include: '#number'}]
            }
          },
          match:
            '(?x) \\G\n\\s+ ([-\\d.]+) # X\n\\s+ ([-\\d.]+) # Y\n\\s+ ([-\\w$]+) # Alignment\n\\s+ ([-\\d.]+) # Text-size',
          name: 'meta.function-call.arguments.ltspice.symbol'
        },
        {match: '.+', name: 'string.unquoted.text.ltspice.symbol'}
      ]
    },
    version: {
      begin: '^\\s*(Version)(?=\\s|$)',
      beginCaptures: {1: {name: 'keyword.control.file-version.ltspice.symbol'}},
      end: '$',
      name: 'meta.version.ltspice.symbol',
      patterns: [{include: '#number'}]
    },
    window: {
      begin: '^\\s*(WINDOW)(?=\\s|$)',
      beginCaptures: {1: {name: 'keyword.control.window.ltspice.symbol'}},
      end: '$',
      name: 'meta.window.ltspice.symbol',
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '#number'}]},
            2: {name: 'constant.language.window-alignment.ltspice.symbol'},
            3: {patterns: [{include: '#number'}]}
          },
          match: '\\G((?:\\s+[-\\d.]+){3})\\s+(\\w+)\\s+([-\\d.]+)',
          name: 'meta.function-call.arguments.ltspice.symbol'
        }
      ]
    }
  },
  scopeName: 'source.ltspice.symbol'
}

export default grammar
