// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/damirka/vscode-move-syntax>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.move'],
  names: ['move'],
  patterns: [
    {include: '#address'},
    {include: '#comments'},
    {include: '#module'},
    {include: '#script'},
    {include: '#macros'}
  ],
  repository: {
    address: {
      begin: '\\b(address)\\b',
      beginCaptures: {1: {name: 'storage.modifier.type.address.keyword.move'}},
      end: '(?<=})',
      name: 'meta.address_block.move',
      patterns: [
        {include: '#comments'},
        {
          begin: '(?<=address)',
          end: '(?=[{])',
          name: 'meta.address.definition.move',
          patterns: [
            {include: '#comments'},
            {include: '#address_literal'},
            {match: '\\b(\\w+)\\b', name: 'entity.name.type.move'}
          ]
        },
        {include: '#module'}
      ]
    },
    address_literal: {
      patterns: [
        {
          match: '\\b(0x[A-Fa-f0-9][A-Fa-f0-9]{,31})\\b',
          name: 'support.constant.diem.address.move'
        },
        {
          match: '\\b(wallet1\\w{38})',
          name: 'support.constant.dfinance.address.move'
        },
        {match: '\\s([@]\\w+)\\b', name: 'support.constant.named.address.move'}
      ]
    },
    all_upper: {match: '\\b([A-Z_]+)\\b', name: 'constant.other.move'},
    as: {match: '\\b(as)\\b', name: 'keyword.control.move'},
    'as-import': {match: '\\b(as)\\b', name: 'meta.import_as.move'},
    assert: {match: '\\b(assert)\\b', name: 'support.function.assert.move'},
    block: {
      begin: '{',
      end: '}',
      name: 'meta.block.move',
      patterns: [
        {include: '#comments'},
        {include: '#as'},
        {include: '#mut'},
        {include: '#let'},
        {include: '#types'},
        {include: '#assert'},
        {include: '#literals'},
        {include: '#control'},
        {include: '#move_copy'},
        {include: '#resource_methods'},
        {include: '#module_access'},
        {include: '#fun_call'},
        {include: '#block'}
      ]
    },
    'block-comments': {
      patterns: [
        {
          begin: '/\\*[\\*!](?![\\*/])',
          end: '\\*/',
          name: 'comment.block.documentation.move'
        },
        {begin: '/\\*', end: '\\*/', name: 'comment.block.move'}
      ]
    },
    comments: {
      name: 'meta.comments.move',
      patterns: [{include: '#line-comments'}, {include: '#block-comments'}]
    },
    const: {
      begin: '\\b(const)\\b',
      beginCaptures: {1: {name: 'storage.modifier.const.move'}},
      end: ';',
      name: 'meta.const.move',
      patterns: [
        {include: '#comments'},
        {include: '#primitives'},
        {include: '#vector'},
        {include: '#literals'},
        {match: '\\b([\\w_]+)\\b', name: 'constant.other.move'}
      ]
    },
    control: {
      match: '\\b(return|while|loop|if|else|break|continue|abort)\\b',
      name: 'keyword.control.move'
    },
    e_const: {
      match: '\\b(E[A-Z][a-zA-Z0-9]+)\\b',
      name: 'constant.other.e_camel_case.move'
    },
    entry_fun: {
      begin: '\\b(entry)\\b',
      beginCaptures: {1: {name: 'storage.modifier.entry.move'}},
      end: '(?<=})',
      name: 'meta.entry_fun.move',
      patterns: [
        {include: '#comments'},
        {match: '\\b(native)\\b', name: 'storage.modifier.native.move'},
        {match: '\\b(public)\\b', name: 'storage.modifier.public.move'},
        {include: '#fun'}
      ]
    },
    friend: {
      begin: '\\b(friend)\\b',
      beginCaptures: {1: {name: 'storage.modifier.type.move'}},
      end: ';',
      name: 'meta.friend.move',
      patterns: [
        {include: '#comments'},
        {include: '#address_literal'},
        {match: '\\b(\\w+)\\b', name: 'entity.name.type.module.move'}
      ]
    },
    fun: {patterns: [{include: '#fun_signature'}, {include: '#fun_body'}]},
    fun_body: {
      begin: '{',
      end: '}',
      name: 'meta.fun_body.move',
      patterns: [
        {include: '#comments'},
        {include: '#import'},
        {include: '#as'},
        {include: '#mut'},
        {include: '#let'},
        {include: '#types'},
        {include: '#assert'},
        {include: '#literals'},
        {include: '#control'},
        {include: '#move_copy'},
        {include: '#resource_methods'},
        {include: '#module_access'},
        {include: '#fun_call'},
        {include: '#block'}
      ]
    },
    fun_call: {
      begin: '\\b(\\w+)\\s*(?:<[\\w\\s,]+>)?\\s*[(]',
      beginCaptures: {1: {name: 'entity.name.function.call.move'}},
      end: '[)]',
      name: 'meta.fun_call.move',
      patterns: [
        {include: '#comments'},
        {include: '#resource_methods'},
        {include: '#module_access'},
        {include: '#move_copy'},
        {include: '#literals'},
        {include: '#fun_call'},
        {include: '#block'},
        {include: '#mut'},
        {include: '#as'}
      ]
    },
    fun_signature: {
      begin: '\\b(fun)\\b',
      beginCaptures: {1: {name: 'storage.modifier.fun.move'}},
      end: '(?=[;{])',
      name: 'meta.fun_signature.move',
      patterns: [
        {include: '#comments'},
        {include: '#module_access'},
        {include: '#types'},
        {include: '#mut'},
        {
          begin: '(?<=fun)',
          end: '(?=[<(])',
          name: 'meta.function_name.move',
          patterns: [
            {include: '#comments'},
            {match: '\\b(\\w+)\\b', name: 'entity.name.function.move'}
          ]
        },
        {include: '#type_param'},
        {
          begin: '[(]',
          end: '[)]',
          name: 'meta.parentheses.move',
          patterns: [
            {
              begin: '(?<=\\()',
              end: '(?=:)',
              patterns: [{include: '#self_keyword'}]
            },
            {include: '#comments'},
            {include: '#module_access'},
            {include: '#types'},
            {include: '#mut'}
          ]
        },
        {match: '\\b(acquires)\\b', name: 'storage.modifier'}
      ]
    },
    import: {
      begin: '\\b(use)\\b',
      beginCaptures: {1: {name: 'storage.modifier.type.move'}},
      end: ';',
      name: 'meta.import.move',
      patterns: [
        {include: '#comments'},
        {include: '#address_literal'},
        {include: '#as-import'},
        {match: '\\b([A-Z]\\w*)\\b', name: 'entity.name.type.move'},
        {
          begin: '{',
          end: '}',
          patterns: [
            {include: '#comments'},
            {include: '#as-import'},
            {match: '\\b([A-Z]\\w*)\\b', name: 'entity.name.type.move'}
          ]
        },
        {match: '\\b(\\w+)\\b', name: 'meta.entity.name.type.module.move'}
      ]
    },
    let: {match: '\\b(let)\\b', name: 'keyword.control.move'},
    'line-comments': {
      begin: '//',
      end: '$',
      name: 'comment.line.double-slash.move'
    },
    literals: {
      patterns: [
        {
          match: '0x[_a-fA-F0-9]+(?:[iu](?:8|16|32|64|size))?',
          name: 'constant.numeric.hex.move'
        },
        {
          match:
            '(?<!(?:\\w|(?:(?<!\\.)\\.)))[0-9][_0-9]*(?:\\.(?!\\.)(?:[0-9][_0-9]*)?)?(?:[eE][+\\-]?[_0-9]+)?(?:[u](?:8|64|128|))?',
          name: 'constant.numeric.move'
        },
        {
          captures: {1: {name: 'constant.character.move'}},
          match: '\\b(?:h)("[a-fA-F0-9]+")'
        },
        {
          begin: '\\bb"',
          end: '"',
          name: 'meta.ascii_literal.move',
          patterns: [
            {match: '\\\\[nrt\\0"]', name: 'constant.character.escape.move'},
            {
              match: '\\\\x[a-fA-F0-9][A-Fa-f0-9]',
              name: 'constant.character.escape.hex.move'
            },
            {match: '[\\x00-\\x7F]', name: 'string.quoted.double.raw.move'}
          ]
        },
        {
          captures: {1: {name: 'constant.numeric.hex.move'}},
          match: 'x"([A-F0-9a-f]+)"',
          name: 'meta.hex_literal.move'
        },
        {match: '\\b(?:true|false)\\b', name: 'constant.language.boolean.move'},
        {include: '#address_literal'}
      ]
    },
    macros: {
      match: '#\\[(?:[\\w0-9=_\\(\\)\\:\\s"]+)\\]',
      name: 'support.constant.macro.move'
    },
    module: {
      begin: '\\b(module)\\b',
      beginCaptures: {1: {name: 'storage.modifier.type.move'}},
      end: '(?<=})',
      name: 'meta.module.move',
      patterns: [
        {include: '#comments'},
        {
          begin: '(?<=module)',
          end: '(?={)',
          patterns: [
            {include: '#comments'},
            {
              begin: '(?<=module)',
              end: '(?=[(::){])',
              name: 'constant.other.move'
            },
            {begin: '(?<=::)', end: '(?=[\\s{])', name: 'entity.name.type.move'}
          ]
        },
        {
          begin: '{',
          end: '}',
          name: 'meta.module_scope.move',
          patterns: [
            {include: '#comments'},
            {include: '#macros'},
            {include: '#import'},
            {include: '#friend'},
            {include: '#const'},
            {include: '#struct'},
            {include: '#entry_fun'},
            {include: '#native_fun'},
            {include: '#public_fun'},
            {include: '#fun'},
            {include: '#spec'},
            {include: '#block'}
          ]
        }
      ]
    },
    module_access: {
      captures: {
        1: {name: 'meta.entity.name.type.accessed.module.move'},
        2: {name: 'entity.name.function.call.move'}
      },
      match: '\\b(\\w+)::(\\w+)\\b',
      name: 'meta.module_access.move'
    },
    move_copy: {match: '\\b(move|copy)\\b', name: 'variable.language.move'},
    mut: {match: '(?<=&)(mut)\\b', name: 'storage.modifier.mut.move'},
    native_fun: {
      begin: '\\b(native)\\b',
      beginCaptures: {1: {name: 'storage.modifier.native.move'}},
      end: '(?<=[;}])',
      name: 'meta.native_fun.move',
      patterns: [
        {include: '#comments'},
        {match: '\\b(public)\\b', name: 'storage.modifier.public.move'},
        {match: '\\b(entry)\\b', name: 'storage.modifier.entry.move'},
        {include: '#fun_signature'}
      ]
    },
    phantom: {match: '\\b(phantom)\\b', name: 'keyword.control.phantom.move'},
    primitives: {
      match: '\\b(u8|u16|u32|u64|u128|u256|address|bool|signer)\\b',
      name: 'support.type.primitives.move'
    },
    public_fun: {
      begin: '\\b(public)\\b',
      beginCaptures: {1: {name: 'storage.modifier.public.move'}},
      end: '(?<=[;}])',
      name: 'meta.public_fun.move',
      patterns: [
        {include: '#comments'},
        {match: '\\b(native)\\b', name: 'storage.modifier.native.move'},
        {match: '\\b(entry)\\b', name: 'storage.modifier.entry.move'},
        {
          begin: '\\(',
          end: '\\)',
          patterns: [
            {include: '#comments'},
            {
              match: '\\b(script|friend)\\b',
              name: 'storage.modifier.public.script.move'
            }
          ]
        },
        {include: '#fun'}
      ]
    },
    resource_methods: {
      match:
        '\\b(borrow_global|borrow_global_mut|exists|move_from|move_to_sender|move_to)\\b',
      name: 'support.function.typed.move'
    },
    script: {
      begin: '\\b(script)\\b',
      beginCaptures: {1: {name: 'storage.modifier.script.move'}},
      end: '(?<=})',
      name: 'meta.script.move',
      patterns: [
        {include: '#comments'},
        {
          begin: '{',
          end: '}',
          name: 'meta.script_scope.move',
          patterns: [
            {include: '#const'},
            {include: '#comments'},
            {include: '#import'},
            {include: '#fun'}
          ]
        }
      ]
    },
    self_keyword: {match: '\\b(self)\\b', name: 'variable.language.self.move'},
    spec: {
      begin: '\\b(spec)\\b',
      beginCaptures: {1: {name: 'storage.modifier.spec.move'}},
      end: '(?<=[;}])',
      name: 'meta.spec.move',
      patterns: [
        {
          match: '\\b(module|schema|struct|fun)',
          name: 'storage.modifier.spec.target.move'
        },
        {match: '\\b(define)', name: 'storage.modifier.spec.define.move'},
        {match: '\\b(\\w+)\\b', name: 'entity.name.function.move'},
        {
          begin: '{',
          end: '}',
          patterns: [
            {include: '#comments'},
            {include: '#spec_block'},
            {include: '#spec_types'},
            {include: '#spec_define'},
            {include: '#spec_keywords'},
            {include: '#control'},
            {include: '#fun_call'},
            {include: '#literals'},
            {include: '#types'},
            {include: '#let'}
          ]
        }
      ]
    },
    spec_block: {
      begin: '{',
      end: '}',
      name: 'meta.spec_block.move',
      patterns: [
        {include: '#comments'},
        {include: '#spec_block'},
        {include: '#spec_types'},
        {include: '#fun_call'},
        {include: '#literals'},
        {include: '#control'},
        {include: '#types'},
        {include: '#let'}
      ]
    },
    spec_define: {
      begin: '\\b(define)\\b',
      beginCaptures: {1: {name: 'keyword.control.move.spec'}},
      end: '(?=[;{])',
      name: 'meta.spec_define.move',
      patterns: [
        {include: '#comments'},
        {include: '#spec_types'},
        {include: '#types'},
        {
          begin: '(?<=define)',
          end: '(?=[(])',
          patterns: [
            {include: '#comments'},
            {match: '\\b(\\w+)\\b', name: 'entity.name.function.move'}
          ]
        }
      ]
    },
    spec_keywords: {
      match:
        '\\b(global|pack|unpack|pragma|native|include|ensures|requires|invariant|apply|aborts_if|modifies)\\b',
      name: 'keyword.control.move.spec'
    },
    spec_types: {
      match: '\\b(range|num|vector|bool|u8|u16|u32|u64|u128|u256|address)\\b',
      name: 'support.type.vector.move'
    },
    struct: {
      begin: '\\b(struct)\\b',
      beginCaptures: {1: {name: 'storage.modifier.type.move'}},
      end: '(?<=})',
      name: 'meta.struct.move',
      patterns: [
        {include: '#comments'},
        {
          begin: '(?<=struct)',
          end: '(?={)',
          name: 'meta.struct_def.move',
          patterns: [
            {include: '#comments'},
            {match: '\\b(has)\\b', name: 'keyword.control.ability.has.move'},
            {
              match: '\\b(store|key|drop|copy)\\b',
              name: 'entity.name.type.ability.move'
            },
            {match: '\\b(\\w+)\\b', name: 'entity.name.type.move'},
            {include: '#type_param'}
          ]
        },
        {
          begin: '{',
          end: '}',
          name: 'meta.struct_body.move',
          patterns: [
            {include: '#comments'},
            {include: '#module_access'},
            {include: '#types'}
          ]
        }
      ]
    },
    type_param: {
      begin: '<',
      end: '>',
      name: 'meta.generic_param.move',
      patterns: [
        {include: '#comments'},
        {include: '#phantom'},
        {include: '#module_access'},
        {
          match: '\\b(store|drop|key|copy)\\b',
          name: 'entity.name.type.kind.move'
        }
      ]
    },
    types: {
      name: 'meta.types.move',
      patterns: [
        {include: '#primitives'},
        {include: '#vector'},
        {include: '#e_const'},
        {match: '\\b([A-Z][A-Za-z0-9]+)\\b', name: 'entity.name.type'},
        {include: '#all_upper'}
      ]
    },
    vector: {
      begin: '\\b(vector)<',
      beginCaptures: {1: {name: 'support.type.vector.move'}},
      end: '>',
      name: 'meta.vector.move',
      patterns: [{include: '#primitives'}, {include: '#vector'}]
    }
  },
  scopeName: 'source.move'
}

export default grammar
