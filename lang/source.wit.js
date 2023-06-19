// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/bytecodealliance/vscode-wit>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.wit'],
  names: ['webassembly-interface-type', 'wit'],
  patterns: [
    {include: '#comment'},
    {include: '#world'},
    {include: '#interface'}
  ],
  repository: {
    'block-comments': {
      patterns: [
        {match: '/\\*\\*/', name: 'comment.block.empty.wit'},
        {
          begin: '/\\*\\*',
          end: '\\*/',
          name: 'comment.block.documentation.wit',
          patterns: [{include: '#block-comments'}]
        },
        {
          begin: '/\\*(?!\\*)',
          end: '\\*/',
          name: 'comment.block.wit',
          patterns: [{include: '#block-comments'}]
        }
      ]
    },
    boolean: {match: '\\s*\\b(bool)\\b', name: 'entity.name.type.boolean.wit'},
    comment: {
      patterns: [
        {include: '#block-comments'},
        {include: '#doc-comment'},
        {include: '#line-comment'}
      ]
    },
    container: {
      name: 'meta.container.ty.wit',
      patterns: [
        {include: '#tuple'},
        {include: '#list'},
        {include: '#option'},
        {include: '#result'},
        {include: '#handle'}
      ]
    },
    'doc-comment': {
      match: '^\\s*///.*',
      name: 'comment.line.documentation.wit'
    },
    enum: {
      applyEndPatternLast: true,
      begin:
        '\\s*\\b(enum)\\b\\s+((?<![\\-\\w])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*)(([\\-])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*))*)\\s*(\\{)\\s*',
      beginCaptures: {
        1: {name: 'keyword.other.enum.enum-items.wit'},
        2: {name: 'entity.name.type.id.enum-items.wit'},
        7: {name: 'punctuation.brackets.curly.begin.wit'}
      },
      end: '\\s*(\\})\\s*',
      endCaptures: {1: {name: 'punctuation.brackets.curly.end.wit'}},
      name: 'meta.enum-items.wit',
      patterns: [{include: '#comment'}, {include: '#enum-cases'}]
    },
    'enum-cases': {
      name: 'meta.enum-cases.wit',
      patterns: [
        {include: '#comment'},
        {
          match:
            '\\s*\\b((?<![\\-\\w])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*)(([\\-])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*))*)\\b',
          name: 'variable.other.enummember.id.enum-cases.wit'
        },
        {match: '\\s*(\\,)', name: 'punctuation.comma.wit'}
      ]
    },
    extern: {
      name: 'meta.extern-type.wit',
      patterns: [
        {
          name: 'meta.interface-type.wit',
          patterns: [
            {
              begin: '\\s*\\b(interface)\\b\\s*(\\{)\\s*',
              beginCaptures: {
                1: {name: 'keyword.other.interface.interface-type.wit'},
                2: {name: 'ppunctuation.brackets.curly.begin.wit'}
              },
              end: '\\s*(\\})\\s*',
              endCaptures: {1: {name: 'punctuation.brackets.curly.end.wit'}},
              patterns: [{include: '#comment'}, {include: '#interface-items'}]
            }
          ]
        },
        {include: '#function-definition'},
        {include: '#use-path'}
      ]
    },
    flags: {
      applyEndPatternLast: true,
      begin:
        '\\s*\\b(flags)\\s+((?<![\\-\\w])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*)(([\\-])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*))*)\\s*(\\{)\\s*',
      beginCaptures: {
        1: {name: 'keyword.other.flags.flags-items.wit'},
        2: {name: 'entity.name.type.id.flags-items.wit'},
        7: {name: 'punctuation.brackets.curly.begin.wit'}
      },
      end: '\\s*(\\})\\s*',
      endCaptures: {1: {name: 'punctuation.brackets.curly.end.wit'}},
      name: 'meta.flags-items.wit',
      patterns: [{include: '#comment'}, {include: '#flags-fields'}]
    },
    'flags-fields': {
      name: 'meta.flags-fields.wit',
      patterns: [
        {include: '#comment'},
        {
          match:
            '\\s*\\b((?<![\\-\\w])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*)(([\\-])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*))*)\\b',
          name: 'variable.other.enummember.id.flags-fields.wit'
        },
        {match: '\\s*(\\,)', name: 'punctuation.comma.wit'}
      ]
    },
    function: {
      applyEndPatternLast: true,
      begin:
        '\\s*\\b(static\\s+)?((?<![\\-\\w])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*)(([\\-])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*))*)\\s*(\\:)\\s*',
      beginCaptures: {
        1: {name: 'storage.modifier.static.func-item.wit'},
        2: {name: 'entity.name.function.id.func-item.wit'},
        3: {name: 'meta.word.wit'},
        5: {name: 'meta.word-separator.wit'},
        6: {name: 'meta.word.wit'},
        7: {name: 'keyword.operator.key-value.wit'}
      },
      end: '\\s*(?<=\\n)',
      name: 'meta.func-item.wit',
      patterns: [{include: '#function-definition'}]
    },
    'function-definition': {
      name: 'meta.func-type.wit',
      patterns: [
        {
          applyEndPatternLast: true,
          begin: '\\s*\\b(func)\\b\\s*(\\()\\s*',
          beginCaptures: {
            1: {name: 'keyword.other.func.func-type.wit'},
            2: {name: 'punctuation.brackets.round.begin.wit'}
          },
          end: '\\s*(\\))\\s*((\\-\\>)(.+))?\\s*',
          endCaptures: {
            1: {name: 'punctuation.brackets.round.end.wit'},
            2: {name: 'meta.result-list.wit'},
            3: {name: 'keyword.operator.arrow.skinny.wit'},
            4: {
              name: 'meta.types.result-list.wit',
              patterns: [{include: '#comment'}, {include: '#types'}]
            }
          },
          name: 'meta.function.wit',
          patterns: [
            {include: '#comment'},
            {
              applyEndPatternLast: true,
              begin:
                '\\s*\\b((?<![\\-\\w])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*)(([\\-])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*))*)\\b\\s*(\\:)\\s*',
              beginCaptures: {
                1: {name: 'variable.parameter.id.named-type.wit'},
                6: {name: 'keyword.operator.key-value.wit'}
              },
              end: '\\s*(\\,)?\\s*',
              endCaptures: {1: {name: 'punctuation.comma.wit'}},
              name: 'meta.named-type-list.wit',
              patterns: [
                {include: '#comment'},
                {include: '#types', name: 'meta.types.named-type-list.wit'}
              ]
            }
          ]
        }
      ]
    },
    handle: {
      captures: {
        1: {name: 'entity.name.type.borrow.handle.wit'},
        2: {name: 'punctuation.brackets.angle.begin.wit'},
        3: {name: 'entity.name.type.id.handle.wit'},
        8: {name: 'punctuation.brackets.angle.end.wit'}
      },
      match:
        '\\s*\\b(borrow)\\b(\\<)\\s*((?<![\\-\\w])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*)(([\\-])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*))*)\\s*(\\>)\\s*',
      name: 'meta.handle.ty.wit'
    },
    identifier: {
      match:
        '\\s*\\b((?<![\\-\\w])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*)(([\\-])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*))*)\\b',
      name: 'entity.name.type.id.wit'
    },
    interface: {
      begin:
        '^\\b(default\\s+)?(interface)\\s+((?<![\\-\\w])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*)(([\\-])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*))*)\\s*(\\{)\\s*',
      beginCaptures: {
        1: {name: 'storage.modifier.default.interface-item.wit'},
        2: {
          name: 'keyword.declaration.interface.interface-item.wit storage.type.wit'
        },
        3: {name: 'entity.name.type.id.interface-item.wit'},
        8: {name: 'punctuation.brackets.curly.begin.wit'}
      },
      end: '\\s*(\\})\\s*',
      endCaptures: {1: {name: 'punctuation.brackets.curly.end.wit'}},
      name: 'meta.interface-item.wit',
      patterns: [{include: '#comment'}, {include: '#interface-items'}]
    },
    'interface-items': {
      name: 'meta.interface-items.wit',
      patterns: [
        {include: '#typedef-item'},
        {include: '#use'},
        {include: '#function'}
      ]
    },
    'line-comment': {match: '\\s*//.*', name: 'comment.line.double-slash.wit'},
    list: {
      applyEndPatternLast: true,
      begin: '\\s*\\b(list)\\b(\\<)\\s*',
      beginCaptures: {
        1: {name: 'entity.name.type.list.wit'},
        2: {name: 'punctuation.brackets.angle.begin.wit'}
      },
      end: '\\s*(\\>)\\s*',
      endCaptures: {1: {name: 'punctuation.brackets.angle.end.wit'}},
      name: 'meta.list.ty.wit',
      patterns: [
        {include: '#comment'},
        {include: '#types', name: 'meta.types.list.wit'}
      ]
    },
    numeric: {
      match: '\\s*\\b(u8|u16|u32|u64|s8|s16|s32|s64|float32|float64)\\b',
      name: 'entity.name.type.numeric.wit'
    },
    operator: {
      patterns: [
        {match: '\\=', name: 'punctuation.equal.wit'},
        {match: '\\,', name: 'punctuation.comma.wit'},
        {match: '\\:', name: 'keyword.operator.key-value.wit'},
        {match: '\\;', name: 'punctuation.semicolon.wit'},
        {match: '\\(', name: 'punctuation.brackets.round.begin.wit'},
        {match: '\\)', name: 'punctuation.brackets.round.end.wit'},
        {match: '\\{', name: 'punctuation.brackets.curly.begin.wit'},
        {match: '\\}', name: 'punctuation.brackets.curly.end.wit'},
        {match: '\\<', name: 'punctuation.brackets.angle.begin.wit'},
        {match: '\\>', name: 'punctuation.brackets.angle.end.wit'},
        {match: '\\*', name: 'keyword.operator.star.wit'},
        {match: '\\-\\>', name: 'keyword.operator.arrow.skinny.wit'}
      ]
    },
    option: {
      applyEndPatternLast: true,
      begin: '\\s*\\b(option)\\b(\\<)\\s*',
      beginCaptures: {
        1: {name: 'entity.name.type.option.wit'},
        2: {name: 'punctuation.brackets.angle.begin.wit'}
      },
      end: '\\s*(\\>)\\s*',
      endCaptures: {1: {name: 'punctuation.brackets.angle.end.wit'}},
      name: 'meta.option.ty.wit',
      patterns: [
        {include: '#comment'},
        {include: '#types', name: 'meta.types.option.wit'}
      ]
    },
    primitive: {
      name: 'meta.primitive.ty.wit',
      patterns: [
        {include: '#numeric'},
        {include: '#boolean'},
        {include: '#string'}
      ]
    },
    record: {
      applyEndPatternLast: true,
      begin:
        '\\s*\\b(record)\\b\\s+((?<![\\-\\w])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*)(([\\-])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*))*)\\s*(\\{)\\s*',
      beginCaptures: {
        1: {name: 'keyword.declaration.record.record-item.wit'},
        2: {name: 'entity.name.type.id.record-item.wit'},
        7: {name: 'punctuation.brackets.curly.begin.wit'}
      },
      end: '\\s*(\\})\\s*',
      endCaptures: {1: {name: 'punctuation.brackets.curly.end.wit'}},
      name: 'meta.record-item.wit',
      patterns: [{include: '#comment'}, {include: '#record-fields'}]
    },
    'record-fields': {
      applyEndPatternLast: true,
      begin:
        '\\s*\\b((?<![\\-\\w])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*)(([\\-])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*))*)\\b\\s*(\\:)\\s*',
      beginCaptures: {
        1: {name: 'variable.declaration.id.record-fields.wit'},
        6: {name: 'keyword.operator.key-value.wit'}
      },
      end: '\\s*(\\,)?\\s*',
      endCaptures: {1: {name: 'punctuation.comma.wit'}},
      name: 'meta.record-fields.wit',
      patterns: [
        {include: '#comment'},
        {include: '#types', name: 'meta.types.record-fields.wit'}
      ]
    },
    resource: {
      begin:
        '\\s*\\b(resource)\\b\\s+((?<![\\-\\w])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*)(([\\-])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*))*)\\s*(\\{)\\s*',
      beginCaptures: {
        1: {name: 'keyword.other.resource.wit'},
        2: {name: 'entity.name.type.id.resource.wit'},
        7: {name: 'punctuation.brackets.curly.begin.wit'}
      },
      end: '\\s*(\\})\\s*',
      endCaptures: {1: {name: 'punctuation.brackets.curly.end.wit'}},
      name: 'meta.resource.wit',
      patterns: [{include: '#comment'}, {include: '#function'}]
    },
    result: {
      applyEndPatternLast: true,
      begin: '\\s*\\b(result)\\b(\\<)?\\s*',
      beginCaptures: {
        1: {name: 'entity.name.type.result.wit'},
        2: {name: 'punctuation.brackets.angle.begin.wit'}
      },
      end: '\\s*(\\>)?\\s*',
      endCaptures: {1: {name: 'punctuation.brackets.angle.end.wit'}},
      name: 'meta.result.ty.wit',
      patterns: [
        {include: '#comment'},
        {
          match: '\\s*(?<!\\w)(\\_)(?!\\w)',
          name: 'variable.other.inferred-type.result.wit'
        },
        {include: '#types', name: 'meta.types.result.wit'},
        {match: '\\s*(\\,)', name: 'punctuation.comma.wit'}
      ]
    },
    string: {
      match: '\\s*\\b(string|char)\\b',
      name: 'entity.name.type.string.wit'
    },
    tuple: {
      applyEndPatternLast: true,
      begin: '\\s*\\b(tuple)\\b(\\<)\\s*',
      beginCaptures: {
        1: {name: 'entity.name.type.tuple.wit'},
        2: {name: 'punctuation.brackets.angle.begin.wit'}
      },
      end: '\\s*(\\>)\\s*',
      endCaptures: {1: {name: 'punctuation.brackets.angle.end.wit'}},
      name: 'meta.tuple.ty.wit',
      patterns: [
        {include: '#comment'},
        {
          patterns: [
            {include: '#types', name: 'meta.types.tuple.wit'},
            {match: '\\s*(\\,)', name: 'punctuation.comma.wit'}
          ]
        }
      ]
    },
    'type-definition': {
      applyEndPatternLast: true,
      begin:
        '\\s*\\b(type)\\b\\s+((?<![\\-\\w])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*)(([\\-])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*))*)\\s*(\\=)\\s*',
      beginCaptures: {
        1: {name: 'keyword.declaration.type.type-item.wit storage.type.wit'},
        2: {name: 'entity.name.type.id.type-item.wit'},
        7: {name: 'punctuation.equal.wit'}
      },
      end: '\\s*(?<=\\n)',
      name: 'meta.type-item.wit',
      patterns: [{include: '#types', name: 'meta.types.type-item.wit'}]
    },
    'typedef-item': {
      name: 'meta.typedef-item.wit',
      patterns: [
        {include: '#resource'},
        {include: '#variant'},
        {include: '#record'},
        {include: '#union'},
        {include: '#flags'},
        {include: '#enum'},
        {include: '#type-definition'}
      ]
    },
    types: {
      name: 'meta.ty.wit',
      patterns: [
        {include: '#primitive'},
        {include: '#container'},
        {include: '#identifier'}
      ]
    },
    union: {
      applyEndPatternLast: true,
      begin:
        '\\s*\\b(union)\\b\\s+((?<![\\-\\w])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*)(([\\-])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*))*)\\s*(\\{)\\s*',
      beginCaptures: {
        1: {name: 'keyword.other.union.union-items.wit'},
        2: {name: 'entity.name.type.declaration.id.union-items.wit'},
        7: {name: 'punctuation.brackets.curly.begin.wit'}
      },
      end: '\\s*(\\})\\s*',
      endCaptures: {1: {name: 'punctuation.brackets.curly.end.wit'}},
      name: 'meta.union-items.wit',
      patterns: [
        {include: '#comment'},
        {include: '#types', name: 'meta.types.union-cases.wit'},
        {match: '\\s*(\\,)', name: 'punctuation.comma.wit'}
      ]
    },
    use: {
      begin: '\\s*\\b(use)\\b\\s+([^\\s]+)(\\.)(\\{)\\s*',
      beginCaptures: {
        1: {name: 'keyword.other.use.use-item.wit'},
        2: {patterns: [{include: '#use-path'}]},
        3: {name: 'keyword.operator.namespace-separator.use-item.wit'},
        4: {name: 'punctuation.brackets.curly.begin.wit'}
      },
      end: '\\s*(\\})\\s*',
      endCaptures: {1: {name: 'punctuation.brackets.curly.end.wit'}},
      name: 'meta.use-item.wit',
      patterns: [
        {include: '#comment'},
        {
          match:
            '\\b((?<![\\-\\w])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*)(([\\-])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*))*)\\b',
          name: 'entity.name.type.declaration.use-names-item.use-item.wit'
        },
        {match: '\\s*(\\,)', name: 'punctuation.comma.wit'}
      ]
    },
    'use-path': {
      name: 'meta.use-path.wit',
      patterns: [
        {
          match: '(?<!\\.)\\b(self|pkg)\\b',
          name: 'variable.language.self.use-path.wit'
        },
        {
          match:
            '\\b((?<![\\-\\w])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*)(([\\-])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*))*)\\b',
          name: 'entity.name.namespace.id.use-path.wit'
        },
        {
          match: '\\.',
          name: 'keyword.operator.namespace-separator.use-path.wit'
        }
      ]
    },
    variant: {
      applyEndPatternLast: true,
      begin:
        '\\s*\\b(variant)\\s+((?<![\\-\\w])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*)(([\\-])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*))*)\\s*(\\{)\\s*',
      beginCaptures: {
        1: {name: 'keyword.other.variant.wit'},
        2: {name: 'entity.name.type.id.variant.wit'},
        7: {name: 'punctuation.brackets.curly.begin.wit'}
      },
      end: '\\s*(\\})\\s*',
      endCaptures: {1: {name: 'punctuation.brackets.curly.end.wit'}},
      name: 'meta.variant.wit',
      patterns: [
        {include: '#comment'},
        {include: '#variant-cases'},
        {include: '#enum-cases'}
      ]
    },
    'variant-cases': {
      applyEndPatternLast: true,
      begin:
        '\\s*\\b((?<![\\-\\w])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*)(([\\-])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*))*)\\b\\s*(\\()\\s*',
      beginCaptures: {
        1: {name: 'variable.other.enummember.id.variant-cases.wit'},
        6: {name: 'punctuation.brackets.round.begin.wit'}
      },
      end: '\\s*(\\))\\s*(\\,)?\\s*',
      endCaptures: {
        1: {name: 'punctuation.brackets.round.end.wit'},
        2: {name: 'punctuation.comma.wit'}
      },
      name: 'meta.variant-cases.wit',
      patterns: [{include: '#types', name: 'meta.types.variant-cases.wit'}]
    },
    world: {
      begin:
        '^\\b(default\\s+)?(world)\\s+((?<![\\-\\w])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*)(([\\-])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*))*)\\s*(\\{)\\s*',
      beginCaptures: {
        1: {name: 'storage.modifier.default.world-item.wit'},
        2: {name: 'keyword.declaration.world.world-item.wit storage.type.wit'},
        3: {name: 'entity.name.type.id.world-item.wit'},
        8: {name: 'punctuation.brackets.curly.begin.wit'}
      },
      end: '\\s*(\\})\\s*',
      endCaptures: {1: {name: 'punctuation.brackets.curly.end.wit'}},
      name: 'meta.world-item.wit',
      patterns: [
        {include: '#comment'},
        {
          applyEndPatternLast: true,
          begin:
            '\\s*\\b(export)\\b\\s+((?<![\\-\\w])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*)(([\\-])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*))*)\\s*(\\:)\\s*',
          beginCaptures: {
            1: {name: 'keyword.control.export.export-item.wit'},
            2: {name: 'variable.other.constant.id.export-item.wit'},
            7: {name: 'keyword.operator.key-value.wit'}
          },
          end: '\\s*(?<=\\n)',
          name: 'meta.export-item.wit',
          patterns: [{include: '#extern'}]
        },
        {
          applyEndPatternLast: true,
          begin:
            '\\s*\\b(import)\\s+((?<![\\-\\w])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*)(([\\-])([a-z][0-9a-z]*|[A-Z][0-9A-Z]*))*)\\s*(\\:)',
          beginCaptures: {
            1: {name: 'keyword.control.import.import-item.wit'},
            2: {name: 'variable.other.id.import-item.wit'},
            7: {name: 'keyword.operator.key-value.wit'}
          },
          end: '\\s*(?<=\\n)',
          name: 'meta.import-item.wit',
          patterns: [{include: '#extern'}]
        },
        {include: '#use'},
        {include: '#typedef-item'}
      ]
    }
  },
  scopeName: 'source.wit'
}

export default grammar
