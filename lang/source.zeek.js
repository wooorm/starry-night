// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/zeek/zeek-sublime>
// and licensed `bsd-3-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.zeek', '.bro'],
  names: ['zeek', 'bro'],
  patterns: [
    {
      begin: '(##!|##<|##|#)',
      beginCaptures: {1: {name: 'punctuation.definition.comment.zeek'}},
      end: '$',
      name: 'comment.line.zeek'
    },
    {
      begin: '(\\")',
      beginCaptures: {1: {name: 'punctuation.definition.string.begin.zeek'}},
      end: '(\\")',
      endCaptures: {1: {name: 'punctuation.definition.string.end.zeek'}},
      name: 'string.quoted.double.zeek',
      patterns: [
        {match: '\\\\.', name: 'constant.character.escape.zeek'},
        {
          match: '%-?[0-9]*(\\.[0-9]+)?[DTdxsefg]',
          name: 'constant.other.placeholder.zeek'
        }
      ]
    },
    {
      begin: '(/)(?=.*/)',
      beginCaptures: {1: {name: 'punctuation.definition.string.begin.zeek'}},
      end: '(/)',
      endCaptures: {1: {name: 'punctuation.definition.string.end.zeek'}},
      name: 'string.regexp.zeek',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.zeek'}]
    },
    {
      captures: {1: {name: 'keyword.other.zeek'}},
      match: '(@(load-plugin|load-sigs|load|unload)).*$',
      name: 'meta.preprocessor.zeek'
    },
    {
      captures: {1: {name: 'keyword.other.zeek'}},
      match: '(@(DEBUG|DIR|FILENAME|deprecated|if|ifdef|ifndef|else|endif))',
      name: 'meta.preprocessor.zeek'
    },
    {
      captures: {
        1: {name: 'keyword.other.zeek'},
        2: {name: 'keyword.operator.zeek'}
      },
      match: '(@prefixes)\\s*(\\+?=).*$',
      name: 'meta.preprocessor.zeek'
    },
    {
      match:
        '\\&\\b(redef|priority|log|optional|default|add_func|delete_func|expire_func|read_expire|write_expire|create_expire|synchronized|persistent|rotate_interval|rotate_size|encrypt|raw_output|mergeable|error_handler|type_column|deprecated|on_change|backend|broker_store|broker_allow_complex_type|is_assigned|is_used)\\b',
      name: 'storage.modifier.attribute.zeek'
    },
    {match: '\\b(T|F)\\b', name: 'constant.language.zeek'},
    {
      match: '\\b\\d{1,5}/(udp|tcp|icmp|unknown)\\b',
      name: 'constant.numeric.port.zeek'
    },
    {
      match:
        '\\b(25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[0-9]{1,2})\\.(25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[0-9]{1,2})\\.(25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[0-9]{1,2})\\.(25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[0-9]{1,2})\\b',
      name: 'constant.numeric.addr.zeek'
    },
    {
      match:
        '\\[([0-9a-fA-F]{0,4}:){2,7}([0-9a-fA-F]{0,4})?((25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[0-9]{1,2})\\.(25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[0-9]{1,2})\\.(25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[0-9]{1,2})\\.(25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[0-9]{1,2}))?\\]',
      name: 'constant.numeric.addr.zeek'
    },
    {
      match:
        '(((?:(\\d*\\.\\d*)([eE][+-]?\\d+)?)|(?:(\\d*)([eE][+-]?\\d+))|(?:(\\d*\\.\\d*)))|\\d+)\\s*(day|hr|min|msec|usec|sec)s?',
      name: 'constant.numeric.float.decimal.interval.zeek'
    },
    {
      match:
        '((?:(\\d*\\.\\d*)([eE][+-]?\\d+)?)|(?:(\\d*)([eE][+-]?\\d+))|(?:(\\d*\\.\\d*)))',
      name: 'constant.numeric.float.decimal.zeek'
    },
    {
      match:
        '\\b(([A-Za-z0-9][A-Za-z0-9\\-]*)(?:\\.([A-Za-z0-9][A-Za-z0-9\\-]*))+)\\b',
      name: 'constant.numeric.hostname.zeek'
    },
    {
      match: '\\b(0x[0-9a-fA-F]+)\\b',
      name: 'constant.numeric.integer.hexadecimal.zeek'
    },
    {match: '\\b(\\d+)\\b', name: 'constant.numeric.integer.decimal.zeek'},
    {match: '(==)|(!=)|(<=)|(<)|(>=)|(>)', name: 'keyword.operator.zeek'},
    {match: '(&&)|(||)|(!)', name: 'keyword.operator.zeek'},
    {match: '(=)|(\\+=)|(-=)', name: 'keyword.operator.zeek'},
    {
      match: '(\\+\\+)|(\\+)|(--)|(-)|(\\*)|(/)|(%)',
      name: 'keyword.operator.zeek'
    },
    {match: '(&)|(\\|)|(\\^)|(~)', name: 'keyword.operator.zeek'},
    {match: '\\b(in|as|is)\\b', name: 'keyword.operator.zeek'},
    {match: ';', name: 'punctuation.terminator.zeek'},
    {match: '\\??\\$', name: 'punctuation.accessor.zeek'},
    {match: '::', name: 'punctuation.accessor.zeek'},
    {match: '(\\?)', name: 'keyword.operator.zeek'},
    {match: '(?<=\\S)(:)', name: 'punctuation.separator.zeek'},
    {match: '(,)', name: 'punctuation.separator.zeek'},
    {match: '(:)', name: 'keyword.operator.zeek'},
    {
      captures: {
        1: {name: 'keyword.other.zeek'},
        2: {name: 'entity.name.namespace.zeek'}
      },
      match:
        '(module)\\s+(([A-Za-z_][A-Za-z_0-9]*)(?:::([A-Za-z_][A-Za-z_0-9]*))*)',
      name: 'meta.namespace.zeek'
    },
    {match: '\\b(export)\\b', name: 'keyword.other.zeek'},
    {match: '\\b(if|else)\\b', name: 'keyword.control.conditional.zeek'},
    {match: '\\b(for|while)\\b', name: 'keyword.control.zeek'},
    {
      match: '\\b(return|break|next|continue|fallthrough)\\b',
      name: 'keyword.control.zeek'
    },
    {match: '\\b(switch|default|case)\\b', name: 'keyword.control.zeek'},
    {match: '\\b(add|delete|copy)\\b', name: 'keyword.other.zeek'},
    {match: '\\b(print)\\b', name: 'keyword.other.zeek'},
    {match: '\\b(when|timeout|schedule)\\b', name: 'keyword.control.zeek'},
    {
      captures: {
        1: {name: 'keyword.other.zeek'},
        2: {name: 'entity.name.struct.record.zeek'},
        3: {name: 'punctuation.separator.zeek'},
        4: {
          name: 'storage.type.struct.record.zeek keyword.declaration.struct.record.zeek'
        }
      },
      match:
        '\\b(type)\\s+((?:[A-Za-z_][A-Za-z_0-9]*)(?:::(?:[A-Za-z_][A-Za-z_0-9]*))*)\\s*(:)\\s*\\b(record)\\b',
      name: 'meta.struct.record.zeek'
    },
    {
      captures: {
        1: {name: 'keyword.other.zeek'},
        2: {name: 'entity.name.enum.zeek'},
        3: {name: 'punctuation.separator.zeek'},
        4: {name: 'storage.type.enum.zeek keyword.declaration.enum.zeek'}
      },
      match:
        '\\b(type)\\s+((?:[A-Za-z_][A-Za-z_0-9]*)(?:::(?:[A-Za-z_][A-Za-z_0-9]*))*)\\s*(:)\\s*\\b(enum)\\b',
      name: 'meta.enum.zeek'
    },
    {
      captures: {
        1: {name: 'keyword.other.zeek'},
        2: {name: 'entity.name.type.zeek'},
        3: {name: 'punctuation.separator.zeek'}
      },
      match:
        '\\b(type)\\s+((?:[A-Za-z_][A-Za-z_0-9]*)(?:::(?:[A-Za-z_][A-Za-z_0-9]*))*)\\s*(:)',
      name: 'meta.type.zeek'
    },
    {
      captures: {
        1: {name: 'keyword.other.zeek'},
        2: {
          name: 'storage.type.struct.record.zeek keyword.declaration.struct.record.zeek'
        },
        3: {name: 'entity.name.struct.record.zeek'}
      },
      match:
        '\\b(redef)\\s+(record)\\s+((?:[A-Za-z_][A-Za-z_0-9]*)(?:::(?:[A-Za-z_][A-Za-z_0-9]*))*)\\b',
      name: 'meta.struct.record.zeek'
    },
    {
      captures: {
        1: {name: 'keyword.other.zeek'},
        2: {name: 'storage.type.enum.zeek keyword.declaration.enum.zeek'},
        3: {name: 'entity.name.enum.zeek'}
      },
      match:
        '\\b(redef)\\s+(enum)\\s+((?:[A-Za-z_][A-Za-z_0-9]*)(?:::(?:[A-Za-z_][A-Za-z_0-9]*))*)\\b',
      name: 'meta.enum.zeek'
    },
    {
      captures: {
        1: {name: 'storage.type.zeek'},
        2: {name: 'entity.name.function.event.zeek'}
      },
      match:
        '\\b(event)\\s+((?:[A-Za-z_][A-Za-z_0-9]*)(?:::(?:[A-Za-z_][A-Za-z_0-9]*))*)(?=\\s*\\()'
    },
    {
      captures: {
        1: {name: 'storage.type.zeek'},
        2: {name: 'entity.name.function.hook.zeek'}
      },
      match:
        '\\b(hook)\\s+((?:[A-Za-z_][A-Za-z_0-9]*)(?:::(?:[A-Za-z_][A-Za-z_0-9]*))*)(?=\\s*\\()'
    },
    {
      captures: {
        1: {name: 'storage.type.zeek'},
        2: {name: 'entity.name.function.zeek'}
      },
      match:
        '\\b(function)\\s+((?:[A-Za-z_][A-Za-z_0-9]*)(?:::(?:[A-Za-z_][A-Za-z_0-9]*))*)(?=\\s*\\()'
    },
    {match: '\\b(redef)\\b', name: 'keyword.other.zeek'},
    {match: '\\b(any)\\b', name: 'storage.type.zeek'},
    {match: '\\b(enum|record|set|table|vector)\\b', name: 'storage.type.zeek'},
    {
      captures: {
        1: {name: 'storage.type.zeek'},
        2: {name: 'keyword.operator.zeek'},
        3: {name: 'storage.type.zeek'}
      },
      match:
        '\\b(opaque)\\s+(of)\\s+((?:[A-Za-z_][A-Za-z_0-9]*)(?:::(?:[A-Za-z_][A-Za-z_0-9]*))*)\\b'
    },
    {match: '\\b(of)\\b', name: 'keyword.operator.zeek'},
    {
      match:
        '\\b(addr|bool|count|double|file|int|interval|pattern|port|string|subnet|time)\\b',
      name: 'storage.type.zeek'
    },
    {match: '\\b(function|hook|event)\\b', name: 'storage.type.zeek'},
    {match: '\\b(global|local|const|option)\\b', name: 'storage.modifier.zeek'},
    {
      match:
        '\\b((?:[A-Za-z_][A-Za-z_0-9]*)(?:::(?:[A-Za-z_][A-Za-z_0-9]*))*)(?=\\s*\\()',
      name: 'entity.name.function.call.zeek'
    },
    {match: '\\{', name: 'punctuation.section.block.begin.zeek'},
    {match: '\\}', name: 'punctuation.section.block.end.zeek'},
    {match: '\\[', name: 'punctuation.section.brackets.begin.zeek'},
    {match: '\\]', name: 'punctuation.section.brackets.end.zeek'},
    {match: '\\(', name: 'punctuation.section.parens.begin.zeek'},
    {match: '\\)', name: 'punctuation.section.parens.end.zeek'}
  ],
  scopeName: 'source.zeek'
}

export default grammar
