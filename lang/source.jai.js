// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/SogoCZE/Jails>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.jai'],
  names: ['jai'],
  patterns: [
    {include: '#markdown-block-comments'},
    {include: '#block-comments'},
    {include: '#comments'},
    {include: '#imports'},
    {include: '#asm'},
    {include: '#strings'},
    {include: '#deprecated-names'},
    {include: '#casts'},
    {include: '#keywords'},
    {include: '#proc'},
    {include: '#deprecated'},
    {include: '#fors'},
    {include: '#structs'},
    {include: '#enums'},
    {include: '#enum-members'},
    {include: '#composite-literals'},
    {include: '#symbols'},
    {include: '#support'},
    {include: '#numbers'},
    {include: '#notes'},
    {include: '#declarations'},
    {include: '#more-directives'},
    {include: '#variables'},
    {include: '#more-numbers'}
  ],
  repository: {
    array: {
      captures: {
        1: {name: 'punctuation.section.brackets.begin.jai'},
        2: {patterns: [{include: '#expression'}]},
        3: {name: 'punctuation.section.brackets.end.jai'}
      },
      match: '(\\[)([^\\]]*)(\\])'
    },
    asm: {
      begin: '(#asm)\\s*(([A-Z0-9]+)\\s*(,[^}]*)?)?(\\{)',
      beginCaptures: {
        1: {name: 'keyword.other.directive.asm.jai'},
        3: {name: 'keyword.other.feature.asm.jai'},
        4: {patterns: [{include: '#comma-joined-asm-features'}]},
        5: {name: 'punctuation.section.braces.begin.jai'}
      },
      contentName: 'source.asm.x86_64',
      end: '(\\})',
      endCaptures: {1: {name: 'punctuation.section.braces.end.jai'}},
      patterns: [
        {captures: {1: {name: 'keyword.operator.pin.jai'}}, match: '(===)'}
      ]
    },
    'block-comments': {
      begin: '(\\/\\*)',
      beginCaptures: {1: {name: 'punctuation.definition.comment.jai'}},
      end: '(\\*\\/)',
      endCaptures: {1: {name: 'punctuation.definition.comment.jai'}},
      name: 'comment.block.jai',
      patterns: [
        {include: '#block-comments', name: 'comment.block.jai'},
        {
          captures: {
            1: {name: 'markup.quote.comment.jai'},
            2: {name: 'comment.block.backquoted.jai'},
            3: {name: 'markup.quote.comment.jai'}
          },
          match: '(`)([^`]*)(`)'
        },
        {
          captures: {
            1: {name: 'comment.block.punctuation.annotation.todo.jai'},
            2: {name: 'comment.block.annotation.todo.jai'},
            3: {name: 'comment.block.todo.jai'}
          },
          match: '(\\@)((?i)TODO)([^@]*)'
        },
        {
          captures: {
            1: {name: 'comment.block.punctuation.annotation.release.jai'},
            2: {name: 'comment.block.annotation.release.jai'},
            3: {name: 'comment.block.release.jai'}
          },
          match: '(\\@)((?i)Release)([^@]*)'
        },
        {
          captures: {
            1: {name: 'comment.block.punctuation.annotation.note.jai'},
            2: {name: 'comment.block.annotation.note.jai'},
            3: {name: 'comment.block.note.jai'}
          },
          match: '(\\@)((?i)Note)([^@]*)'
        },
        {
          captures: {
            1: {name: 'comment.block.punctuation.annotation.urgent.jai'},
            2: {name: 'comment.block.annotation.urgent.jai'},
            3: {name: 'comment.block.urgent.jai'}
          },
          match: '(\\@)((?i)Urgent)([^@]*)'
        },
        {
          captures: {
            1: {name: 'comment.block.punctuation.annotation.speed.jai'},
            2: {name: 'comment.block.annotation.speed.jai'},
            3: {name: 'comment.block.speed.jai'}
          },
          match: '(\\@)((?i)Speed)([^@]*)'
        },
        {
          captures: {
            1: {name: 'comment.block.punctuation.annotation.robustness.jai'},
            2: {name: 'comment.block.annotation.robustness.jai'},
            3: {name: 'comment.block.robustness.jai'}
          },
          match: '(\\@)((?i)Robustness)([^@]*)'
        },
        {
          captures: {
            1: {name: 'comment.block.punctuation.annotation.nocheckin.jai'},
            2: {name: 'comment.block.annotation.nocheckin.jai'},
            3: {name: 'comment.block.todo.jai'}
          },
          match: '(\\@)((?i)NoCheckin)([^@]*)'
        },
        {
          captures: {
            1: {name: 'comment.block.punctuation.annotation.jai'},
            2: {name: 'comment.block.annotation.jai'}
          },
          match: '(\\@)(\\w+)'
        },
        {
          captures: {
            1: {name: 'comment.block.punctuation.signature.jai'},
            2: {name: 'comment.block.signature.name.jai'},
            3: {name: 'comment.block.signature.date.jai'}
          },
          match: '(-) (\\w+) ([0-9]{4}-[0-9]{2}-[0-9]{2})',
          name: 'comment.block.signature.jai'
        },
        {
          captures: {
            1: {
              name: 'comment.block.punctuation.checklist.brackets.todo.begin.jai'
            },
            2: {name: 'comment.block.punctuation.checklist.mark.todo.jai'},
            3: {
              name: 'comment.block.punctuation.checklist.brackets.todo.end.jai'
            },
            4: {
              name: 'comment.block.checklist.item.todo.jai',
              patterns: [{include: '#block-comments-line'}]
            }
          },
          match: '^\\s*(\\[)( )(\\])(.*)'
        },
        {
          captures: {
            1: {
              name: 'comment.block.punctuation.checklist.brackets.partial.begin.jai'
            },
            2: {name: 'comment.block.punctuation.checklist.mark.partial.jai'},
            3: {
              name: 'comment.block.punctuation.checklist.brackets.partial.end.jai'
            },
            4: {
              name: 'comment.block.checklist.item.partial.jai',
              patterns: [{include: '#block-comments-line'}]
            }
          },
          match: '^\\s*(\\[)(\\.)(\\])(.*)'
        },
        {
          captures: {
            1: {
              name: 'comment.block.punctuation.checklist.brackets.done.begin.jai'
            },
            2: {name: 'comment.block.punctuation.checklist.mark.done.jai'},
            3: {
              name: 'comment.block.punctuation.checklist.brackets.done.end.jai'
            },
            4: {
              name: 'comment.block.checklist.item.done.jai',
              patterns: [{include: '#block-comments-line'}]
            }
          },
          match: '^\\s*(\\[)([^ \\.])(\\])(.*)'
        }
      ]
    },
    'block-comments-line': {
      patterns: [
        {
          captures: {
            1: {name: 'markup.quote.comment.jai'},
            2: {name: 'comment.block.backquoted.jai'},
            3: {name: 'markup.quote.comment.jai'}
          },
          match: '(`)([^`]*)(`)'
        },
        {
          captures: {
            1: {name: 'comment.block.punctuation.annotation.todo.jai'},
            2: {name: 'comment.block.annotation.todo.jai'},
            3: {name: 'comment.block.todo.jai'}
          },
          match: '(\\@)((?i)TODO)([^@]*)'
        },
        {
          captures: {
            1: {name: 'comment.block.punctuation.annotation.release.jai'},
            2: {name: 'comment.block.annotation.release.jai'},
            3: {name: 'comment.block.release.jai'}
          },
          match: '(\\@)((?i)Release)([^@]*)'
        },
        {
          captures: {
            1: {name: 'comment.block.punctuation.annotation.note.jai'},
            2: {name: 'comment.block.annotation.note.jai'},
            3: {name: 'comment.block.note.jai'}
          },
          match: '(\\@)((?i)Note)([^@]*)'
        },
        {
          captures: {
            1: {name: 'comment.block.punctuation.annotation.urgent.jai'},
            2: {name: 'comment.block.annotation.urgent.jai'},
            3: {name: 'comment.block.urgent.jai'}
          },
          match: '(\\@)((?i)Urgent)([^@]*)'
        },
        {
          captures: {
            1: {name: 'comment.block.punctuation.annotation.speed.jai'},
            2: {name: 'comment.block.annotation.speed.jai'},
            3: {name: 'comment.block.speed.jai'}
          },
          match: '(\\@)((?i)Speed)([^@]*)'
        },
        {
          captures: {
            1: {name: 'comment.block.punctuation.annotation.robustness.jai'},
            2: {name: 'comment.block.annotation.robustness.jai'},
            3: {name: 'comment.block.robustness.jai'}
          },
          match: '(\\@)((?i)Robustness)([^@]*)'
        },
        {
          captures: {
            1: {name: 'comment.block.punctuation.annotation.nocheckin.jai'},
            2: {name: 'comment.block.annotation.nocheckin.jai'},
            3: {name: 'comment.block.nocheckin.jai'}
          },
          match: '(\\@)((?i)NoCheckin)([^@]*)'
        },
        {
          captures: {
            1: {name: 'comment.block.punctuation.annotation.jai'},
            2: {name: 'comment.block.annotation.jai'}
          },
          match: '(\\@)(\\w+)'
        },
        {
          captures: {
            1: {name: 'comment.block.punctuation.signature.jai'},
            2: {name: 'comment.block.signature.name.jai'},
            3: {name: 'comment.block.signature.date.jai'}
          },
          match: '(-)\\s*(.*)\\s*([0-9]{4}-[0-9]{2}-[0-9]{2})',
          name: 'comment.block.signature.jai'
        }
      ]
    },
    casts: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.control.cast.jai'},
            5: {name: 'punctuation.section.parens.begin.jai'},
            6: {name: 'storage.type'},
            7: {name: 'keyword.operator.pointer.jai'},
            8: {name: 'punctuation.section.parens.begin.jai'}
          },
          match:
            '\\b(cast(,trunc)?(,no_check)?(,trunc)?)\\s*(\\()\\s*((\\**)[a-zA-Z_](?:\\w|\\\\ *)*)\\s*(\\))'
        },
        {match: '\\b(xx|cast)\\b', name: 'keyword.control.cast.jai'}
      ]
    },
    'comma-joined-asm-features': {
      captures: {
        1: {name: 'punctuation.separator.jai'},
        2: {name: 'keyword.other.feature.asm.jai'}
      },
      match: '(,)\\s*([A-Z0-9]+)\\s*'
    },
    'comma-joined-variables': {
      captures: {
        1: {name: 'punctuation.separator.jai'},
        2: {name: 'variable.other.declaration.jai'},
        3: {name: 'support.variable.jai'}
      },
      match: '(,)\\s*((it_index|it)|([a-zA-Z_](?:\\w|\\\\ *)*))'
    },
    comments: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.comment.jai'},
            2: {
              name: 'comment.line.double-slash.punctuation.checklist.brackets.todo.begin.jai'
            },
            3: {
              name: 'comment.line.double-slash.punctuation.checklist.mark.todo.jai'
            },
            4: {
              name: 'comment.line.double-slash.punctuation.checklist.brackets.todo.end.jai'
            },
            5: {
              name: 'comment.line.double-slash.checklist.item.todo.jai',
              patterns: [{include: '#comments-line'}]
            }
          },
          match: '(//)\\s*(\\[)( )(\\])(.*)'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.comment.jai'},
            2: {
              name: 'comment.line.double-slash.punctuation.checklist.brackets.partial.begin.jai'
            },
            3: {
              name: 'comment.line.double-slash.punctuation.checklist.mark.partial.jai'
            },
            4: {
              name: 'comment.line.double-slash.punctuation.checklist.brackets.partial.end.jai'
            },
            5: {
              name: 'comment.line.double-slash.checklist.item.partial.jai',
              patterns: [{include: '#comments-line'}]
            }
          },
          match: '(//)\\s*(\\[)(\\.)(\\])(.*)'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.comment.jai'},
            2: {
              name: 'comment.line.double-slash.punctuation.checklist.brackets.done.begin.jai'
            },
            3: {
              name: 'comment.line.double-slash.punctuation.checklist.mark.done.jai'
            },
            4: {
              name: 'comment.line.double-slash.punctuation.checklist.brackets.done.end.jai'
            },
            5: {
              name: 'comment.line.double-slash.checklist.item.done.jai',
              patterns: [{include: '#comments-line'}]
            }
          },
          match: '(//)\\s*(\\[)([^ \\.])(\\])(.*)'
        },
        {
          captures: {
            1: {name: 'punctuation.definition.comment.jai'},
            2: {
              name: 'comment.line.double-slash.jai',
              patterns: [{include: '#comments-line'}]
            }
          },
          match: '(//)(.*)'
        }
      ]
    },
    'comments-line': {
      patterns: [
        {
          captures: {
            1: {name: 'markup.quote.comment.jai'},
            2: {name: 'comment.line.double-slash.backquoted.jai'},
            3: {name: 'markup.quote.comment.jai'}
          },
          match: '(`)([^`]*)(`)'
        },
        {
          captures: {
            1: {
              name: 'comment.line.double-slash.punctuation.annotation.todo.jai'
            },
            2: {name: 'comment.line.double-slash.annotation.todo.jai'},
            3: {name: 'comment.line.double-slash.todo.jai'}
          },
          match: '(\\@)((?i)TODO)([^@]*)'
        },
        {
          captures: {
            1: {
              name: 'comment.line.double-slash.punctuation.annotation.release.jai'
            },
            2: {name: 'comment.line.double-slash.annotation.release.jai'},
            3: {name: 'comment.line.double-slash.release.jai'}
          },
          match: '(\\@)((?i)Release)([^@]*)'
        },
        {
          captures: {
            1: {
              name: 'comment.line.double-slash.punctuation.annotation.note.jai'
            },
            2: {name: 'comment.line.double-slash.annotation.note.jai'},
            3: {name: 'comment.line.double-slash.note.jai'}
          },
          match: '(\\@)((?i)Note)([^@]*)'
        },
        {
          captures: {
            1: {
              name: 'comment.line.double-slash.punctuation.annotation.urgent.jai'
            },
            2: {name: 'comment.line.double-slash.annotation.urgent.jai'},
            3: {name: 'comment.line.double-slash.urgent.jai'}
          },
          match: '(\\@)((?i)Urgent)([^@]*)'
        },
        {
          captures: {
            1: {
              name: 'comment.line.double-slash.punctuation.annotation.speed.jai'
            },
            2: {name: 'comment.line.double-slash.annotation.speed.jai'},
            3: {name: 'comment.line.double-slash.speed.jai'}
          },
          match: '(\\@)((?i)Speed)([^@]*)'
        },
        {
          captures: {
            1: {
              name: 'comment.line.double-slash.punctuation.annotation.robustness.jai'
            },
            2: {name: 'comment.line.double-slash.annotation.robustness.jai'},
            3: {name: 'comment.line.double-slash.robustness.jai'}
          },
          match: '(\\@)((?i)Robustness)([^@]*)'
        },
        {
          captures: {
            1: {
              name: 'comment.line.double-slash.punctuation.annotation.nocheckin.jai'
            },
            2: {name: 'comment.line.double-slash.annotation.nocheckin.jai'},
            3: {name: 'comment.line.double-slash.nocheckin.jai'}
          },
          match: '(\\@)((?i)NoCheckin)([^@]*)'
        },
        {
          captures: {
            1: {name: 'comment.line.double-slash.punctuation.annotation.jai'},
            2: {name: 'comment.line.double-slash.annotation.jai'}
          },
          match: '(\\@)(\\w+)'
        },
        {
          captures: {
            1: {name: 'comment.line.double-slash.punctuation.signature.jai'},
            2: {name: 'comment.line.double-slash.signature.name.jai'},
            3: {name: 'comment.line.double-slash.signature.date.jai'}
          },
          match: '(-)\\s*(.*)\\s*([0-9]{4}-[0-9]{2}-[0-9]{2})',
          name: 'comment.line.double-slash.signature.jai'
        }
      ]
    },
    'composite-literals': {
      patterns: [
        {
          captures: {
            1: {name: 'storage.type.struct.jai'},
            2: {name: 'punctuation.accessor.jai'},
            3: {name: 'punctuation.section.braces.begin.jai'}
          },
          match: '\\b([a-zA-Z_](?:\\w|\\\\ *)*)?\\s*(\\.)(\\{)'
        },
        {
          captures: {
            1: {name: 'storage.type.struct.jai'},
            2: {name: 'punctuation.accessor.jai'},
            3: {name: 'punctuation.section.bracket.begin.jai'}
          },
          match: '\\b([a-zA-Z_](?:\\w|\\\\ *)*)?\\s*(\\.)(\\[)'
        }
      ]
    },
    declarations: {
      patterns: [
        {
          captures: {
            1: {name: 'variable.other.constant.declaration.jai'},
            12: {name: 'keyword.declaration.jai'},
            2: {patterns: [{include: '#comma-joined-variables'}]},
            4: {name: 'keyword.declaration.jai'},
            5: {patterns: [{include: '#array'}]},
            6: {name: 'storage.type.jai'},
            7: {name: 'keyword.operator.pointer.jai'},
            9: {name: 'keyword.other.directive.jai'}
          },
          match:
            '\\b([a-zA-Z_](?:\\w|\\\\ *)*)((\\s*,\\s*[a-zA-Z_](?:\\w|\\\\ *)*)*)\\s*(:)\\s*(\\[[^\\]]*\\])?\\s*((\\**)((#type(,(isa|distinct))?)|[a-zA-Z_](?:\\w|\\\\ *)*))?\\s*(:)'
        },
        {
          captures: {
            1: {name: 'variable.other.constant.declaration.jai'},
            10: {name: 'keyword.declaration.jai'},
            2: {name: 'keyword.declaration.jai'},
            3: {patterns: [{include: '#array'}]},
            4: {name: 'storage.type.jai'},
            5: {name: 'keyword.operator.pointer.jai'},
            7: {name: 'keyword.other.directive.jai'}
          },
          match:
            '\\b([a-zA-Z_](?:\\w|\\\\ *)*)\\s*(:)\\s*(\\[[^\\]]*\\])?\\s*((\\**)((#type(,(isa|distinct))?)|[a-zA-Z_](?:\\w|\\\\ *)*))?\\s*(:)'
        },
        {
          captures: {
            1: {name: 'variable.other.declaration.jai'},
            10: {name: 'keyword.declaration.enum.jai'},
            11: {name: 'storage.type.jai'},
            2: {name: 'support.variable.jai'},
            4: {patterns: [{include: '#comma-joined-variables'}]},
            6: {name: 'keyword.declaration.jai'},
            8: {name: 'keyword.declaration.struct.jai'},
            9: {name: 'keyword.declaration.enum.jai'}
          },
          match:
            '\\b((it_index|it)|([a-zA-Z_](?:\\w|\\\\ *)*))((\\s*,\\s*[a-zA-Z_](?:\\w|\\\\ *)*)*)\\s*(:)\\s*((struct)|(enum)|(enum_flags))\\b\\s*([a-zA-Z_](?:\\w|\\\\ *)*)?'
        },
        {
          captures: {
            1: {name: 'variable.other.declaration.jai'},
            2: {name: 'support.variable.jai'},
            4: {name: 'keyword.declaration.jai'},
            6: {name: 'keyword.declaration.struct.jai'},
            7: {name: 'keyword.declaration.enum.jai'},
            8: {name: 'keyword.declaration.enum.jai'},
            9: {name: 'storage.type.jai'}
          },
          match:
            '\\b((it_index|it)|([a-zA-Z_](?:\\w|\\\\ *)*))\\s*(:)\\s*((struct)|(enum)|(enum_flags))\\b\\s*([a-zA-Z_](?:\\w|\\\\ *)*)?'
        },
        {
          captures: {
            1: {name: 'variable.other.declaration.jai'},
            11: {name: 'keyword.other.directive.jai'},
            14: {name: 'keyword.declaration.jai'},
            2: {name: 'support.variable.jai'},
            4: {patterns: [{include: '#comma-joined-variables'}]},
            6: {name: 'keyword.declaration.jai'},
            7: {patterns: [{include: '#array'}]},
            8: {name: 'storage.type.jai'},
            9: {name: 'keyword.operator.pointer.jai'}
          },
          match:
            '\\b((it_index|it)|([a-zA-Z_](?:\\w|\\\\ *)*))((\\s*,\\s*[a-zA-Z_](?:\\w|\\\\ *)*)*)\\s*(:)\\s*(\\[[^\\]]*\\])?\\s*((\\**)((#type(,(isa|distinct))?)|[a-zA-Z_](?:\\w|\\\\ *)*))?\\s*(=)?'
        },
        {
          captures: {
            1: {name: 'variable.other.declaration.jai'},
            12: {name: 'keyword.declaration.jai'},
            2: {name: 'support.variable.jai'},
            4: {name: 'keyword.declaration.jai'},
            5: {patterns: [{include: '#array'}]},
            6: {name: 'storage.type.jai'},
            7: {name: 'keyword.operator.pointer.jai'},
            9: {name: 'keyword.other.directive.jai'}
          },
          match:
            '\\b((it_index|it)|([a-zA-Z_](?:\\w|\\\\ *)*))\\s*(:)\\s*(\\[[^\\]]*\\])?\\s*((\\**)((#type(,(isa|distinct))?)|[a-zA-Z_](?:\\w|\\\\ *)*))?\\s*(=)?'
        }
      ]
    },
    deprecated: {
      captures: {
        1: {name: 'invalid.deprecated.jai'},
        3: {name: 'punctuation.definition.string.deprecated.begin.jai'},
        4: {name: 'string-quoted.other.deprecated.jai'},
        6: {name: 'punctuation.definition.string.deprecated.end.jai'}
      },
      match: '(#deprecated\\s*((")(([^"\\\\]|\\\\.)*)("))?)'
    },
    'enum-members': {
      captures: {
        1: {patterns: [{include: '#expression'}]},
        2: {name: 'punctuation.accessor.jai'},
        3: {name: 'variable.enum.jai'}
      },
      match: '([^\\w])(\\.)([a-zA-Z_](?:\\w|\\\\ *)*)'
    },
    enums: {
      captures: {
        1: {name: 'entity.name.enum.jai'},
        2: {name: 'keyword.declaration.jai'},
        3: {name: 'keyword.declaration.enum.jai'}
      },
      match: '\\b([a-zA-Z_](?:\\w|\\\\ *)*)\\s*(::)\\s*(enum(_flags)?)'
    },
    expression: {
      patterns: [
        {include: '#strings'},
        {include: '#casts'},
        {include: '#deprecated'},
        {include: '#enum-members'},
        {include: '#keywords'},
        {include: '#symbols'},
        {include: '#support'},
        {include: '#numbers'},
        {include: '#variables'},
        {include: '#more-numbers'}
      ]
    },
    fors: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.control.loop.for.jai'},
            2: {name: 'keyword.operator.jai'},
            3: {name: 'variable.other.declaration.jai'},
            4: {name: 'punctuation.separator.jai'},
            5: {name: 'variable.other.declaration.jai'},
            6: {name: 'keyword.declaration.jai'}
          },
          match:
            '\\b(for)\\s+([*<\\s]*)\\s*([a-zA-Z_](?:\\w|\\\\ *)*)\\s*(,)\\s*([a-zA-Z_](?:\\w|\\\\ *)*)\\s*(:)'
        },
        {
          captures: {
            1: {name: 'keyword.control.loop.for.jai'},
            2: {name: 'keyword.operator.jai'},
            3: {name: 'variable.other.declaration.jai'},
            4: {name: 'keyword.declaration.jai'}
          },
          match: '\\b(for)\\s+([*<\\s]*)\\s*([a-zA-Z_](?:\\w|\\\\ *)*)\\s*(:)'
        },
        {
          captures: {
            1: {name: 'keyword.control.loop.for.jai'},
            2: {name: 'keyword.operator.jai'}
          },
          match: '\\b(for)\\s+([*<\\s]*)'
        }
      ]
    },
    imports: {
      patterns: [
        {
          captures: {
            1: {name: 'entity.name.namespace.jai'},
            2: {name: 'keyword.declaration.jai'},
            3: {name: 'keyword.control.import.directive.jai'},
            6: {name: 'punctuation.definition.string.import.begin.jai'},
            7: {name: 'string-quoted.other.import.jai'},
            8: {name: 'punctuation.definition.string.import.end.jai'}
          },
          match:
            '^\\s*([a-zA-Z_](?:\\w|\\\\ *)*)\\s*(::)\\s*(#import(,file|,dir|,string)?)\\s+(")([^"]+)(")'
        },
        {
          captures: {
            1: {name: 'keyword.control.import.directive.jai'},
            4: {name: 'punctuation.definition.string.import.begin.jai'},
            5: {name: 'string-quoted.other.import.jai'},
            6: {name: 'punctuation.definition.string.import.end.jai'}
          },
          match: '(#import(,file|,dir|,string)?|#load)\\s+(")([^"]+)(")'
        },
        {
          captures: {
            1: {name: 'keyword.control.import.directive.jai'},
            4: {name: 'punctuation.definition.string.import.begin.jai'},
            5: {name: 'string-quoted.other.import.jai'}
          },
          match: '(#import(,file|,dir|,string)?|#load)\\s+("[^"]*)?$'
        },
        {
          captures: {
            1: {name: 'constant.other.import.jai'},
            2: {name: 'keyword.declaration.jai'},
            3: {name: 'keyword.control.import.directive.jai'},
            5: {name: 'punctuation.definition.string.import.begin.jai'},
            6: {name: 'string-quoted.other.import.jai'},
            7: {name: 'punctuation.definition.string.import.end.jai'}
          },
          match:
            '^\\s*([a-zA-Z_](?:\\w|\\\\ *)*)\\s*(::)\\s*(#foreign_(system_)?library)\\s+(")([^"]+)(")'
        },
        {
          captures: {
            1: {name: 'constant.other.import.jai'},
            2: {name: 'keyword.declaration.jai'},
            3: {name: 'keyword.control.import.directive.jai'},
            5: {name: 'punctuation.definition.string.import.begin.jai'},
            6: {name: 'string-quoted.other.import.jai'}
          },
          match:
            '^\\s*([a-zA-Z_](?:\\w|\\\\ *)*)\\s*(::)\\s*(#foreign_(system_)?library)\\s+("[^"]*)?$'
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match: '\\b(if|ifx|then|else|case)\\b',
          name: 'keyword.control.conditional.jai'
        },
        {
          match: '\\b(return|break|continue)\\b',
          name: 'keyword.control.jump.jai'
        },
        {match: '\\b(while)\\b', name: 'keyword.control.loop.while.jai'},
        {match: '\\b(remove)\\b', name: 'keyword.control.loop.for.remove.jai'},
        {match: '\\b(defer)\\b', name: 'keyword.control.defer.jai'},
        {
          match:
            '(#add_context|#align|#as|#assert|#bake(_arguments|_constants)?|#bytes|#caller_code|#caller_location|#code(,(null|typed))?|#compile_time|#complete|#dump|#elsewhere|#expand|#file|#filepath|#ifx|#if|\\binline\\b|#insert(,scope)?|#intrinsic|#modify|#module_parameters|#must|#no_abc|#no_aoc|#no_alias|#no_padding|#no_reset|#place|#placeholder|#procedure_name|#procedure_of_call|#program_export|#run|#exists|#v2|#Context|#specified|#symmetric|#this|#through|#type(,(isa|distinct))?|#type_info_none|#type_info_procedures_are_void_pointers|#type_info_no_size_complaint|#unshared)\\b',
          name: 'keyword.other.directive.jai'
        },
        {
          match: '(#scope_export|#scope_file|#scope_module)',
          name: 'keyword.other.directive.scope.jai'
        },
        {match: '(#char)', name: 'keyword.other.directive.string.jai'},
        {
          match: '\\b(context|push_context)\\b',
          name: 'keyword.other.context.jai'
        },
        {
          match: '\\b(using(,map|,except|,only)?)\\b',
          name: 'keyword.other.using.jai'
        },
        {match: '\\b(temp)\\b', name: 'keyword.other.allocator.jai'},
        {match: '\\b(true)\\b', name: 'constant.language.true.jai'},
        {match: '\\b(false)\\b', name: 'constant.language.false.jai'},
        {match: '\\b(null)\\b', name: 'constant.language.null.jai'},
        {match: '\\b(struct)\\b', name: 'keyword.declaration.struct.jai'},
        {match: '\\b(enum)\\b', name: 'keyword.declaration.enum.jai'},
        {match: '\\b(union)\\b', name: 'keyword.declaration.union.jai'},
        {
          match:
            '\\b(int|u8|u16|u32|u64|s8|s16|s32|s64|float|float32|float64|bool|string|void|Code|Type)\\b',
          name: 'storage.type.jai'
        }
      ]
    },
    'more-directives': {
      captures: {
        1: {name: 'keyword.control.import.directive.decl.jai'},
        3: {name: 'constant.other.import.jai'},
        5: {name: 'punctuation.definition.string.import.begin.jai'},
        6: {name: 'string-quoted.other.import.jai'},
        8: {name: 'punctuation.definition.string.import.end.jai'}
      },
      match:
        '(#foreign\\s+([A-Z-a-z_]\\w*(\\s*(")(([^"\\\\]|\\\\.)*)("))?)|#compiler|#intrinsic|#runtime_support)'
    },
    'more-numbers': {
      patterns: [
        {captures: {1: {name: 'constant.numeric.jai'}}, match: '(0b[01_]+)'},
        {
          captures: {1: {name: 'constant.numeric.jai'}},
          match: '(0x[a-fA-F_\\d]+)'
        },
        {captures: {1: {name: 'constant.numeric.jai'}}, match: '(\\d[\\d_]*)'}
      ]
    },
    numbers: {
      patterns: [
        {
          captures: {1: {name: 'constant.numeric.jai'}},
          match: '[(\\[{:\\s=.,/*+<>-](0b[01_]+)'
        },
        {
          captures: {1: {name: 'constant.numeric.jai'}},
          match: '[(\\[{:\\s=.,/*+<>-](0x[a-fA-F_\\d]+)'
        },
        {
          captures: {1: {name: 'constant.numeric.jai'}},
          match: '[(\\[\\{:\\s=.,/*+<>-](\\d[\\d_]*)'
        }
      ]
    },
    proc: {
      patterns: [
        {
          captures: {
            1: {name: 'variable.other.constant.declaration.jai'},
            11: {name: 'punctuation.return.jai'},
            12: {
              name: 'meta.function.return-type.jai',
              patterns: [{include: '#return-declarations'}]
            },
            13: {name: 'keyword.control.import.directive.decl.jai'},
            16: {name: 'constant.other.import.jai'},
            18: {name: 'punctuation.definition.string.import.begin.jai'},
            19: {name: 'string-quoted.other.import.jai'},
            2: {name: 'keyword.declaration.jai'},
            21: {name: 'punctuation.definition.string.import.end.jai'},
            22: {name: 'invalid.deprecated.jai'},
            24: {name: 'punctuation.definition.string.deprecated.begin.jai'},
            25: {name: 'string-quoted.other.deprecated.jai'},
            27: {name: 'punctuation.definition.string.deprecated.end.jai'},
            28: {name: 'punctuation.terminator.jai'},
            29: {name: 'keyword.other.directive.jai'},
            3: {name: 'keyword.other.directive.jai'},
            5: {name: 'storage.modifier.jai'},
            6: {name: 'storage.modifier.jai'},
            7: {name: 'punctuation.section.parens.begin.jai'},
            8: {
              name: 'meta.function.parameters.jai',
              patterns: [{include: '#parameter-declarations'}]
            },
            9: {name: 'punctuation.section.parens.end.jai'}
          },
          match:
            '\\b([a-zA-Z_](?:\\w|\\\\ *)*)\\s*(::)\\s*(#type)\\b\\s*((inline)\\s*|(no_inline)\\s*)*(\\()(.*)(\\))\\s*((->)([^{]+))?\\s*(((#foreign\\s+([a-zA-Z_](?:\\w|\\\\ *)*(\\s*(")(([^"\\\\]|\\\\.)*)("))?)|#compiler|#intrinsic|#runtime_support)\\s*)+\\s*(#deprecated\\s*((")(([^"\\\\]|\\\\.)*)("))?)?\\s*(;)?)?(\\s*#c_call|\\s*#no_context|\\s*#symmetric)*'
        },
        {
          captures: {
            1: {name: 'entity.name.function.preprocessor.jai'},
            10: {name: 'punctuation.return.jai'},
            11: {
              name: 'meta.function.return-type.jai',
              patterns: [{include: '#return-declarations'}]
            },
            12: {name: 'keyword.other.directive.jai'},
            14: {name: 'keyword.other.directive.jai'},
            2: {name: 'keyword.declaration.jai'},
            4: {name: 'storage.modifier.jai'},
            5: {name: 'storage.modifier.jai'},
            6: {name: 'punctuation.section.parens.begin.jai'},
            7: {
              name: 'meta.function.preprocessor.parameters.jai',
              patterns: [{include: '#parameter-declarations'}]
            },
            8: {name: 'punctuation.section.parens.end.jai'}
          },
          match:
            '\\b([a-zA-Z_](?:\\w|\\\\ *)*)\\s*(::)\\s*((inline)\\s*|(no_inline)\\s*)*(\\()(.*)(\\))\\s*((->)([^{]+))?\\s*(#expand)(\\s*(#no_debug))?',
          name: 'meta.preprocessor.macro.declaration.jai'
        },
        {
          captures: {
            1: {name: 'entity.name.function.jai'},
            10: {name: 'punctuation.section.parens.end.jai'},
            12: {name: 'punctuation.return.jai'},
            13: {
              name: 'meta.function.return-type.jai',
              patterns: [{include: '#return-declarations'}]
            },
            14: {name: 'keyword.control.import.directive.decl.jai'},
            17: {name: 'constant.other.import.jai'},
            19: {name: 'punctuation.definition.string.import.begin.jai'},
            2: {
              patterns: [
                {
                  captures: {1: {name: 'keyword.other.main.jai'}},
                  match: '(main)'
                },
                {
                  captures: {1: {name: 'keyword.other.for_expansion.jai'}},
                  match: '(for_expansion)'
                },
                {
                  captures: {
                    1: {name: 'keyword.other.operator.jai'},
                    2: {name: 'keyword.operator.jai'}
                  },
                  match: '(operator\\s*([^ :]+))'
                }
              ]
            },
            20: {name: 'string-quoted.other.import.jai'},
            22: {name: 'punctuation.definition.string.import.end.jai'},
            23: {name: 'invalid.deprecated.jai'},
            25: {name: 'punctuation.definition.string.deprecated.begin.jai'},
            26: {name: 'string-quoted.other.deprecated.jai'},
            28: {name: 'punctuation.definition.string.deprecated.end.jai'},
            29: {name: 'punctuation.terminator.jai'},
            3: {name: 'keyword.operator.jai'},
            30: {name: 'keyword.other.directive.jai'},
            4: {name: 'keyword.declaration.jai'},
            6: {name: 'storage.modifier.jai'},
            7: {name: 'storage.modifier.jai'},
            8: {name: 'punctuation.section.parens.begin.jai'},
            9: {
              name: 'meta.function.parameters.jai',
              patterns: [{include: '#parameter-declarations'}]
            }
          },
          match:
            '\\b((main|for_expansion|operator\\s*([^ :]+))|[a-zA-Z_](?:\\w|\\\\ *)*)\\s*(::)\\s*((inline)\\s*|(no_inline)\\s*)*(\\()(.*)(\\))\\s*((->)([^{]+))?\\s*(((#foreign\\s+([a-zA-Z_](?:\\w|\\\\ *)*(\\s*(")(([^"\\\\]|\\\\.)*)("))?)|#compiler|#intrinsic|#runtime_support)\\s*)+\\s*(#deprecated\\s*((")(([^"\\\\]|\\\\.)*)("))?)?\\s*(;)?)?(\\s*#c_call|\\s*#no_context|\\s*#symmetric)*',
          name: 'meta.function.declaration.jai'
        },
        {
          captures: {
            1: {name: 'entity.name.function.jai'},
            2: {name: 'keyword.declaration.jai'},
            3: {name: 'keyword.other.directive.jai'},
            5: {name: 'entity.name.function.jai'},
            6: {name: 'punctuation.section.parens.begin.jai'},
            7: {
              name: 'meta.function.parameters.jai',
              patterns: [{include: '#parameters'}]
            },
            8: {name: 'punctuation.section.parens.end.jai'}
          },
          match:
            '\\b([a-zA-Z_](?:\\w|\\\\ *)*)\\s*(::)\\s*(#bake(_arguments|_constants))\\s+([a-zA-Z_](?:\\w|\\\\ *)*)\\s*(\\()(.*)(\\))',
          name: 'meta.function.declaration.jai'
        },
        {
          begin:
            '(([a-zA-Z_](?:\\w|\\\\ *)*)(\\.)(([a-zA-Z_](?:\\w|\\\\ *)*)(\\.))*)?\\b([a-zA-Z_](?:\\w|\\\\ *)*)\\s*(\\()',
          beginCaptures: {
            2: {name: 'entity.name.namespace.jai'},
            3: {name: 'punctuation.accessor.jai'},
            5: {name: 'entity.name.namespace.member.jai'},
            6: {name: 'punctuation.accessor.jai'},
            7: {
              patterns: [
                {include: '#support'},
                {
                  captures: {1: {name: 'entity.name.function.jai'}},
                  match: '(.*)'
                }
              ]
            },
            8: {name: 'punctuation.section.parens.begin.jai'}
          },
          end: '(\\))',
          endCaptures: {1: {name: 'punctuation.section.parens.end.jai'}},
          name: 'meta.function.call.jai',
          patterns: [{include: '$self'}]
        },
        {
          begin:
            '(([a-zA-Z_](?:\\w|\\\\ *)*)(\\.)(([a-zA-Z_](?:\\w|\\\\ *)*)(\\.))*)?\\b([a-zA-Z_](?:\\w|\\\\ *)*)\\s*(\\()(.*)',
          beginCaptures: {
            2: {name: 'entity.name.namespace.jai'},
            3: {name: 'punctuation.accessor.jai'},
            5: {name: 'entity.name.namespace.member.jai'},
            6: {name: 'punctuation.accessor.jai'},
            7: {
              patterns: [
                {include: '#support'},
                {
                  captures: {1: {name: 'entity.name.function.jai'}},
                  match: '(.*)'
                }
              ]
            },
            8: {name: 'punctuation.section.parens.begin.jai'},
            9: {
              name: 'meta.function.parameters.jai',
              patterns: [{include: '#parameters'}]
            }
          },
          end: '(\\))',
          endCaptures: {1: {name: 'punctuation.section.parens.end.jai'}},
          name: 'meta.function.call.jai',
          patterns: [{include: '$self'}]
        }
      ],
      repository: {
        'parameter-declarations': {
          patterns: [
            {
              captures: {
                1: {name: 'punctuation.separator.parameters.jai'},
                2: {name: 'keyword.other.jai'},
                5: {name: 'variable.parameter.jai'},
                6: {name: 'punctuation.definition.generic.jai'},
                7: {name: 'keyword.declaration.jai'},
                8: {patterns: [{include: '#expression'}]}
              },
              match:
                '(,)?\\s*(using\\s*((,except|,only|,map)\\([^)]*\\)\\s*)?)?((\\$*)[a-zA-Z_](?:\\w|\\\\ *)*)(\\s*:=)([^,]*)'
            },
            {
              captures: {
                1: {name: 'punctuation.separator.parameters.jai'},
                10: {name: 'storage.type.jai'},
                11: {name: 'keyword.operator.pointer.jai'},
                12: {name: 'punctuation.definition.generic.jai'},
                13: {name: 'keyword.declaration.jai'},
                14: {patterns: [{include: '#expression'}]},
                2: {name: 'keyword.other.jai'},
                5: {name: 'variable.parameter.jai'},
                6: {name: 'punctuation.definition.generic.jai'},
                7: {name: 'keyword.declaration.jai'},
                8: {name: 'punctuation.jai'},
                9: {include: '#array'}
              },
              match:
                '(,)?\\s*(using\\s*((,except|,only|,map)\\([^)]*\\)\\s*)?)?((\\$*)[a-zA-Z_](?:\\w|\\\\ *)*)\\s*(:)\\s*(\\.\\.)?\\s*(\\[[^\\]]*\\])?\\s*((\\**)($)?[a-zA-Z_](?:\\w|\\\\ *)*)?(\\s*=)?([^,]*)'
            }
          ]
        },
        parameters: {
          patterns: [
            {
              captures: {
                1: {name: 'punctuation.separator.parameters.jai'},
                2: {patterns: [{include: '#strings'}]}
              },
              match: '(,)?\\s*((")(([^"\\\\]|\\\\.)*)("))\\s*'
            },
            {
              captures: {
                1: {name: 'punctuation.separator.parameters.jai'},
                14: {name: 'variable.parameter.jai'},
                15: {name: 'keyword.operator.jai'},
                16: {patterns: [{include: '#expression'}]},
                2: {name: 'keyword.other.directive.jai'},
                4: {patterns: [{include: '#casts'}]}
              },
              match:
                '(,)?(\\s*(#code|#code,null|#code,typed|#caller_code))?((cast(,trunc)?(,no_check)?(,trunc)?)\\s*(\\()\\s*((\\**)[a-zA-Z_](?:\\w|\\\\ *)*)\\s*(\\)))?(\\s*([a-zA-Z_](?:\\w|\\\\ *)*)(\\s*=))?([^,]*)'
            }
          ]
        },
        'return-declarations': {
          patterns: [
            {
              captures: {
                1: {name: 'punctuation.separator.parameters.jai'},
                10: {name: 'punctuation.definition.annotation.jai'},
                11: {name: 'variable.annotation.jai'},
                12: {name: 'keyword.other.directive.jai'},
                13: {name: 'keyword.control.import.directive.r1.jai'},
                16: {name: 'constant.other.import.jai'},
                18: {name: 'punctuation.definition.string.import.begin.jai'},
                19: {name: 'string-quoted.other.import.jai'},
                2: {name: 'variable.parameter.return.jai'},
                21: {name: 'punctuation.definition.string.import.end.jai'},
                22: {name: 'invalid.deprecated.jai'},
                24: {
                  name: 'punctuation.definition.string.deprecated.begin.jai'
                },
                25: {name: 'string-quoted.other.deprecated.jai'},
                27: {name: 'punctuation.definition.string.deprecated.end.jai'},
                28: {name: 'punctuation.terminator.jai'},
                29: {name: 'keyword.other.directive.jai'},
                3: {name: 'keyword.declaration.jai'},
                30: {patterns: [{include: '#comments'}]},
                4: {name: 'storage.type.jai'},
                5: {patterns: [{include: '#array'}]},
                6: {name: 'keyword.operator.pointer.jai'},
                7: {name: 'punctuation.definition.generic'},
                8: {name: 'keyword.other.directive.jai'}
              },
              match:
                '(,)?\\s*([a-zA-Z_](?:\\w|\\\\ *)*)\\s*(:)\\s*((\\[[^\\]]*\\])?\\s*(\\**)(\\$*)[a-zA-Z_](?:\\w|\\\\ *)*)\\s*(#must)?\\s*((@)([a-zA-Z_](?:\\w|\\\\ *)*))?\\s*(#expand)?\\s*(((#foreign\\s+([A-Z-a-z_]\\w*(\\s*(")(([^"\\\\]|\\\\.)*)("))?)|#compiler|#intrinsic|#runtime_support)\\s*)+\\s*(#deprecated\\s*((")(([^"\\\\]|\\\\.)*)("))?)?\\s*(;)?)?(\\s*#c_call|\\s*#no_context|\\s*#symmetric)*\\s*(//.*)?'
            },
            {
              captures: {
                1: {name: 'punctuation.separator.parameters.jai'},
                10: {name: 'keyword.other.directive.jai'},
                11: {name: 'keyword.control.import.directive.jai'},
                14: {name: 'constant.other.import.jai'},
                16: {name: 'punctuation.definition.string.import.begin.jai'},
                17: {name: 'string-quoted.other.import.jai'},
                19: {name: 'punctuation.definition.string.import.end.jai'},
                2: {name: 'storage.type.jai'},
                20: {name: 'invalid.deprecated.jai'},
                22: {
                  name: 'punctuation.definition.string.deprecated.begin.jai'
                },
                23: {name: 'string-quoted.other.deprecated.jai'},
                25: {name: 'punctuation.definition.string.deprecated.end.jai'},
                26: {name: 'punctuation.terminator.jai'},
                27: {name: 'keyword.other.directive.jai'},
                28: {patterns: [{include: '#comments'}]},
                3: {patterns: [{include: '#array'}]},
                4: {name: 'keyword.operator.pointer.jai'},
                5: {name: 'punctuation.definition.generic'},
                6: {name: 'keyword.other.directive.jai'},
                8: {name: 'punctuation.definition.annotation.jai'},
                9: {name: 'variable.annotation.jai'}
              },
              match:
                '(,)?\\s*((\\[[^\\]]*\\])?\\s*(\\**)(\\$*)[a-zA-Z_](?:\\w|\\\\ *)*)\\s*(#must)?\\s*((@)([a-zA-Z_](?:\\w|\\\\ *)*))?\\s*(#expand)?\\s*(((#foreign\\s+([A-Z-a-z_]\\w*(\\s*(")(([^"\\\\]|\\\\.)*)("))?)|#compiler|#intrinsic|#runtime_support)\\s*)+\\s*(#deprecated\\s*((")(([^"\\\\]|\\\\.)*)("))?)?\\s*(;)?)?(\\s*#c_call|\\s*#no_context|\\s*#symmetric)*\\s*(//.*)?'
            }
          ]
        }
      }
    },
    strings: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.string.empty.begin.jai'},
            2: {name: 'punctuation.definition.string.empty.end.jai'}
          },
          match: '(")(")',
          name: 'string.quoted.double.empty.jai'
        },
        {
          begin: '(")',
          beginCaptures: {1: {name: 'punctuation.definition.string.begin.jai'}},
          end: '("|$)',
          endCaptures: {1: {name: 'punctuation.definition.string.end.jai'}},
          name: 'string.quoted.double.jai',
          patterns: [
            {match: '\\\\.', name: 'constant.character.escape.jai'},
            {match: '%[0-9]+', name: 'constant.other.placeholder.jai'},
            {
              captures: {1: {name: 'constant.character.escape.jai'}},
              match: '(%)%'
            },
            {match: '%', name: 'constant.other.placeholder.jai'}
          ]
        },
        {
          begin: '(#string)\\s+((?i)([A-Za-z_]\\w*)?(arm))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.directive.string.arm.jai'},
            2: {name: 'constant.other.stringdelimiter.here.embed.arm.jai'},
            4: {
              name: 'constant.other.stringdelimiter.here.embed.language.arm.jai'
            }
          },
          contentName: 'string.unquoted.here.embed.arm.jai',
          end: '\\s*(\\3)(\\4)',
          endCaptures: {
            1: {name: 'constant.other.stringdelimiter.here.embed.arm.jai'},
            2: {
              name: 'constant.other.stringdelimiter.here.embed.language.arm.jai'
            }
          },
          name: 'string.here.embed.arm.jai',
          patterns: []
        },
        {
          begin: '(#string)\\s+((?i)([A-Za-z_]\\w*)?(bat))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.directive.string.bat.jai'},
            2: {name: 'constant.other.stringdelimiter.here.embed.bat.jai'},
            4: {
              name: 'constant.other.stringdelimiter.here.embed.language.bat.jai'
            }
          },
          contentName: 'string.unquoted.here.embed.bat.jai',
          end: '\\s*(\\3)(\\4)',
          endCaptures: {
            1: {name: 'constant.other.stringdelimiter.here.embed.bat.jai'},
            2: {
              name: 'constant.other.stringdelimiter.here.embed.language.bat.jai'
            }
          },
          name: 'string.here.embed.bat.jai',
          patterns: [{include: 'source.batchfile'}]
        },
        {
          begin: '(#string)\\s+((?i)([A-Za-z_]\\w*)?(c(\\+\\+|pp)))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.directive.string.cpp.jai'},
            2: {name: 'constant.other.stringdelimiter.here.embed.cpp.jai'},
            4: {
              name: 'constant.other.stringdelimiter.here.embed.language.cpp.jai'
            }
          },
          contentName: 'string.unquoted.here.embed.cpp.jai',
          end: '\\s*(\\3)(\\4)',
          endCaptures: {
            1: {name: 'constant.other.stringdelimiter.here.embed.cpp.jai'},
            2: {
              name: 'constant.other.stringdelimiter.here.embed.language.cpp.jai'
            }
          },
          name: 'string.here.embed.cpp.jai',
          patterns: [{include: 'source.c++'}]
        },
        {
          begin: '(#string)\\s+((?i)([A-Za-z_]\\w*)?(css))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.directive.string.css.jai'},
            2: {name: 'constant.other.stringdelimiter.here.embed.css.jai'},
            4: {
              name: 'constant.other.stringdelimiter.here.embed.language.css.jai'
            }
          },
          contentName: 'string.unquoted.here.embed.css.jai',
          end: '\\s*(\\3)(\\4)',
          endCaptures: {
            1: {name: 'constant.other.stringdelimiter.here.embed.css.jai'},
            2: {
              name: 'constant.other.stringdelimiter.here.embed.language.css.jai'
            }
          },
          name: 'string.here.embed.css.jai',
          patterns: [{include: 'source.css'}]
        },
        {
          begin: '(#string)\\s+((?i)([A-Za-z_]\\w*)?(c(sharp|#|s)))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.directive.string.cs.jai'},
            2: {name: 'constant.other.stringdelimiter.here.embed.cs.jai'},
            4: {
              name: 'constant.other.stringdelimiter.here.embed.language.cs.jai'
            }
          },
          contentName: 'string.unquoted.here.embed.cs.jai',
          end: '\\s*(\\3)(\\4)',
          endCaptures: {
            1: {name: 'constant.other.stringdelimiter.here.embed.cs.jai'},
            2: {
              name: 'constant.other.stringdelimiter.here.embed.language.cs.jai'
            }
          },
          name: 'string.here.embed.cs.jai',
          patterns: [{include: 'source.cs'}]
        },
        {
          begin: '(#string)\\s+((?i)([A-Za-z_]\\w*)?(c))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.directive.string.c.jai'},
            2: {name: 'constant.other.stringdelimiter.here.embed.c.jai'},
            4: {
              name: 'constant.other.stringdelimiter.here.embed.language.c.jai'
            }
          },
          contentName: 'string.unquoted.here.embed.c.jai',
          end: '\\s*(\\3)(\\4)',
          endCaptures: {
            1: {name: 'constant.other.stringdelimiter.here.embed.c.jai'},
            2: {
              name: 'constant.other.stringdelimiter.here.embed.language.c.jai'
            }
          },
          name: 'string.here.embed.c.jai',
          patterns: [{include: 'source.c'}]
        },
        {
          begin: '(#string)\\s+((?i)([A-Za-z_]\\w*)?(glsl))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.directive.string.glsl.jai'},
            2: {name: 'constant.other.stringdelimiter.here.embed.glsl.jai'},
            4: {
              name: 'constant.other.stringdelimiter.here.embed.language.glsl.jai'
            }
          },
          contentName: 'string.unquoted.here.embed.glsl.jai',
          end: '\\s*(\\3)(\\4)',
          endCaptures: {
            1: {name: 'constant.other.stringdelimiter.here.embed.glsl.jai'},
            2: {
              name: 'constant.other.stringdelimiter.here.embed.language.glsl.jai'
            }
          },
          name: 'string.here.embed.glsl.jai',
          patterns: [{include: 'source.glsl'}]
        },
        {
          begin: '(#string)\\s+((?i)([A-Za-z_]\\w*)?(guy))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.directive.string.guy.jai'},
            2: {name: 'constant.other.stringdelimiter.here.embed.guy.jai'},
            4: {
              name: 'constant.other.stringdelimiter.here.embed.language.guy.jai'
            }
          },
          contentName: 'string.unquoted.here.embed.guy.jai',
          end: '\\s*(\\3)(\\4)',
          endCaptures: {
            1: {name: 'constant.other.stringdelimiter.here.embed.guy.jai'},
            2: {
              name: 'constant.other.stringdelimiter.here.embed.language.guy.jai'
            }
          },
          name: 'string.here.embed.guy.jai',
          patterns: []
        },
        {
          begin: '(#string)\\s+((?i)([A-Za-z_]\\w*)?(hlsl))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.directive.string.hlsl.jai'},
            2: {name: 'constant.other.stringdelimiter.here.embed.hlsl.jai'},
            4: {
              name: 'constant.other.stringdelimiter.here.embed.language.hlsl.jai'
            }
          },
          contentName: 'string.unquoted.here.embed.hlsl.jai',
          end: '\\s*(\\3)(\\4)',
          endCaptures: {
            1: {name: 'constant.other.stringdelimiter.here.embed.hlsl.jai'},
            2: {
              name: 'constant.other.stringdelimiter.here.embed.language.hlsl.jai'
            }
          },
          name: 'string.here.embed.hlsl.jai',
          patterns: [{include: 'source.hlsl'}]
        },
        {
          begin: '(#string)\\s+((?i)([A-Za-z_]\\w*)?(jai))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.directive.string.jai.jai'},
            2: {name: 'constant.other.stringdelimiter.here.embed.jai.jai'},
            4: {
              name: 'constant.other.stringdelimiter.here.embed.language.jai.jai'
            }
          },
          contentName: 'string.unquoted.here.embed.jai.jai',
          end: '\\s*(\\3)(\\4)',
          endCaptures: {
            1: {name: 'constant.other.stringdelimiter.here.embed.jai.jai'},
            2: {
              name: 'constant.other.stringdelimiter.here.embed.language.jai.jai'
            }
          },
          name: 'string.here.embed.jai.jai',
          patterns: [{include: 'source.jai'}]
        },
        {
          begin: '(#string)\\s+((?i)([A-Za-z_]\\w*)?(java))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.directive.string.java.jai'},
            2: {name: 'constant.other.stringdelimiter.here.embed.java.jai'},
            4: {
              name: 'constant.other.stringdelimiter.here.embed.language.java.jai'
            }
          },
          contentName: 'string.unquoted.here.embed.java.jai',
          end: '\\s*(\\3)(\\4)',
          endCaptures: {
            1: {name: 'constant.other.stringdelimiter.here.embed.java.jai'},
            2: {
              name: 'constant.other.stringdelimiter.here.embed.language.java.jai'
            }
          },
          name: 'string.here.embed.java.jai',
          patterns: [{include: 'source.java'}]
        },
        {
          begin: '(#string)\\s+((?i)([A-Za-z_]\\w*)?(jsonc))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.directive.string.jsonc.jai'},
            2: {name: 'constant.other.stringdelimiter.here.embed.jsonc.jai'},
            4: {
              name: 'constant.other.stringdelimiter.here.embed.language.jsonc.jai'
            }
          },
          contentName: 'string.unquoted.here.embed.jsonc.jai',
          end: '\\s*(\\3)(\\4)',
          endCaptures: {
            1: {name: 'constant.other.stringdelimiter.here.embed.jsonc.jai'},
            2: {
              name: 'constant.other.stringdelimiter.here.embed.language.jsonc.jai'
            }
          },
          name: 'string.here.embed.jsonc.jai',
          patterns: [{include: 'source.json.comments'}]
        },
        {
          begin: '(#string)\\s+((?i)([A-Za-z_]\\w*)?(json))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.directive.string.json.jai'},
            2: {name: 'constant.other.stringdelimiter.here.embed.json.jai'},
            4: {
              name: 'constant.other.stringdelimiter.here.embed.language.json.jai'
            }
          },
          contentName: 'string.unquoted.here.embed.json.jai',
          end: '\\s*(\\3)(\\4)',
          endCaptures: {
            1: {name: 'constant.other.stringdelimiter.here.embed.json.jai'},
            2: {
              name: 'constant.other.stringdelimiter.here.embed.language.json.jai'
            }
          },
          name: 'string.here.embed.json.jai',
          patterns: [{include: 'source.json'}]
        },
        {
          begin: '(#string)\\s+((?i)([A-Za-z_]\\w*)?((js|javascript)))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.directive.string.js.jai'},
            2: {name: 'constant.other.stringdelimiter.here.embed.js.jai'},
            4: {
              name: 'constant.other.stringdelimiter.here.embed.language.js.jai'
            }
          },
          contentName: 'string.unquoted.here.embed.js.jai',
          end: '\\s*(\\3)(\\4)',
          endCaptures: {
            1: {name: 'constant.other.stringdelimiter.here.embed.js.jai'},
            2: {
              name: 'constant.other.stringdelimiter.here.embed.language.js.jai'
            }
          },
          name: 'string.here.embed.js.jai',
          patterns: [{include: 'source.js'}]
        },
        {
          begin: '(#string)\\s+((?i)([A-Za-z_]\\w*)?(lua))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.directive.string.lua.jai'},
            2: {name: 'constant.other.stringdelimiter.here.embed.lua.jai'},
            4: {
              name: 'constant.other.stringdelimiter.here.embed.language.lua.jai'
            }
          },
          contentName: 'string.unquoted.here.embed.lua.jai',
          end: '\\s*(\\3)(\\4)',
          endCaptures: {
            1: {name: 'constant.other.stringdelimiter.here.embed.lua.jai'},
            2: {
              name: 'constant.other.stringdelimiter.here.embed.language.lua.jai'
            }
          },
          name: 'string.here.embed.lua.jai',
          patterns: [{include: 'source.lua'}]
        },
        {
          begin: '(#string)\\s+((?i)([A-Za-z_]\\w*)?(make(file)?))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.directive.string.makefile.jai'},
            2: {name: 'constant.other.stringdelimiter.here.embed.makefile.jai'},
            4: {
              name: 'constant.other.stringdelimiter.here.embed.language.makefile.jai'
            }
          },
          contentName: 'string.unquoted.here.embed.makefile.jai',
          end: '\\s*(\\3)(\\4)',
          endCaptures: {
            1: {name: 'constant.other.stringdelimiter.here.embed.makefile.jai'},
            2: {
              name: 'constant.other.stringdelimiter.here.embed.language.makefile.jai'
            }
          },
          name: 'string.here.embed.makefile.jai',
          patterns: [{include: 'source.makefile'}]
        },
        {
          begin: '(#string)\\s+((?i)([A-Za-z_]\\w*)?((metal|msl)))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.directive.string.metal.jai'},
            2: {name: 'constant.other.stringdelimiter.here.embed.metal.jai'},
            4: {
              name: 'constant.other.stringdelimiter.here.embed.language.metal.jai'
            }
          },
          contentName: 'string.unquoted.here.embed.metal.jai',
          end: '\\s*(\\3)(\\4)',
          endCaptures: {
            1: {name: 'constant.other.stringdelimiter.here.embed.metal.jai'},
            2: {
              name: 'constant.other.stringdelimiter.here.embed.language.metal.jai'
            }
          },
          name: 'string.here.embed.metal.jai',
          patterns: []
        },
        {
          begin: '(#string)\\s+((?i)([A-Za-z_]\\w*)?((powershell|psl)))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.directive.string.psl.jai'},
            2: {name: 'constant.other.stringdelimiter.here.embed.psl.jai'},
            4: {
              name: 'constant.other.stringdelimiter.here.embed.language.psl.jai'
            }
          },
          contentName: 'string.unquoted.here.embed.psl.jai',
          end: '\\s*(\\3)(\\4)',
          endCaptures: {
            1: {name: 'constant.other.stringdelimiter.here.embed.psl.jai'},
            2: {
              name: 'constant.other.stringdelimiter.here.embed.language.psl.jai'
            }
          },
          name: 'string.here.embed.psl.jai',
          patterns: [{include: 'source.powershell'}]
        },
        {
          begin: '(#string)\\s+((?i)([A-Za-z_]\\w*)?(py(thon)?))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.directive.string.python.jai'},
            2: {name: 'constant.other.stringdelimiter.here.embed.python.jai'},
            4: {
              name: 'constant.other.stringdelimiter.here.embed.language.python.jai'
            }
          },
          contentName: 'string.unquoted.here.embed.python.jai',
          end: '\\s*(\\3)(\\4)',
          endCaptures: {
            1: {name: 'constant.other.stringdelimiter.here.embed.python.jai'},
            2: {
              name: 'constant.other.stringdelimiter.here.embed.language.python.jai'
            }
          },
          name: 'string.here.embed.python.jai',
          patterns: [{include: 'source.python'}]
        },
        {
          begin: '(#string)\\s+((?i)([A-Za-z_]\\w*)?(shaderlab))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.directive.string.shaderlab.jai'},
            2: {
              name: 'constant.other.stringdelimiter.here.embed.shaderlab.jai'
            },
            4: {
              name: 'constant.other.stringdelimiter.here.embed.language.shaderlab.jai'
            }
          },
          contentName: 'string.unquoted.here.embed.shaderlab.jai',
          end: '\\s*(\\3)(\\4)',
          endCaptures: {
            1: {
              name: 'constant.other.stringdelimiter.here.embed.shaderlab.jai'
            },
            2: {
              name: 'constant.other.stringdelimiter.here.embed.language.shaderlab.jai'
            }
          },
          name: 'string.here.embed.shaderlab.jai',
          patterns: [{include: 'source.shaderlab'}]
        },
        {
          begin: '(#string)\\s+((?i)([A-Za-z_]\\w*)?(shader))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.directive.string.shader.jai'},
            2: {name: 'constant.other.stringdelimiter.here.embed.shader.jai'},
            4: {
              name: 'constant.other.stringdelimiter.here.embed.language.shader.jai'
            }
          },
          contentName: 'string.unquoted.here.embed.shader.jai',
          end: '\\s*(\\3)(\\4)',
          endCaptures: {
            1: {name: 'constant.other.stringdelimiter.here.embed.shader.jai'},
            2: {
              name: 'constant.other.stringdelimiter.here.embed.language.shader.jai'
            }
          },
          name: 'string.here.embed.shader.jai',
          patterns: [{include: 'source.glsl'}]
        },
        {
          begin: '(#string)\\s+((?i)([A-Za-z_]\\w*)?(sh(ell)?))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.directive.string.sh.jai'},
            2: {name: 'constant.other.stringdelimiter.here.embed.sh.jai'},
            4: {
              name: 'constant.other.stringdelimiter.here.embed.language.sh.jai'
            }
          },
          contentName: 'string.unquoted.here.embed.sh.jai',
          end: '\\s*(\\3)(\\4)',
          endCaptures: {
            1: {name: 'constant.other.stringdelimiter.here.embed.sh.jai'},
            2: {
              name: 'constant.other.stringdelimiter.here.embed.language.sh.jai'
            }
          },
          name: 'string.here.embed.sh.jai',
          patterns: [{include: 'source.shell'}]
        },
        {
          begin: '(#string)\\s+((?i)([A-Za-z_]\\w*)?(sql))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.directive.string.sql.jai'},
            2: {name: 'constant.other.stringdelimiter.here.embed.sql.jai'},
            4: {
              name: 'constant.other.stringdelimiter.here.embed.language.sql.jai'
            }
          },
          contentName: 'string.unquoted.here.embed.sql.jai',
          end: '\\s*(\\3)(\\4)',
          endCaptures: {
            1: {name: 'constant.other.stringdelimiter.here.embed.sql.jai'},
            2: {
              name: 'constant.other.stringdelimiter.here.embed.language.sql.jai'
            }
          },
          name: 'string.here.embed.sql.jai',
          patterns: [{include: 'source.sql'}]
        },
        {
          begin: '(#string)\\s+((?i)([A-Za-z_]\\w*)?(toml))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.directive.string.toml.jai'},
            2: {name: 'constant.other.stringdelimiter.here.embed.toml.jai'},
            4: {
              name: 'constant.other.stringdelimiter.here.embed.language.toml.jai'
            }
          },
          contentName: 'string.unquoted.here.embed.toml.jai',
          end: '\\s*(\\3)(\\4)',
          endCaptures: {
            1: {name: 'constant.other.stringdelimiter.here.embed.toml.jai'},
            2: {
              name: 'constant.other.stringdelimiter.here.embed.language.toml.jai'
            }
          },
          name: 'string.here.embed.toml.jai',
          patterns: [{include: 'source.toml'}]
        },
        {
          begin: '(#string)\\s+((?i)([A-Za-z_]\\w*)?((ts|typescript)))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.directive.string.ts.jai'},
            2: {name: 'constant.other.stringdelimiter.here.embed.ts.jai'},
            4: {
              name: 'constant.other.stringdelimiter.here.embed.language.ts.jai'
            }
          },
          contentName: 'string.unquoted.here.embed.ts.jai',
          end: '\\s*(\\3)(\\4)',
          endCaptures: {
            1: {name: 'constant.other.stringdelimiter.here.embed.ts.jai'},
            2: {
              name: 'constant.other.stringdelimiter.here.embed.language.ts.jai'
            }
          },
          name: 'string.here.embed.ts.jai',
          patterns: [{include: 'source.ts'}]
        },
        {
          begin: '(#string)\\s+((?i)([A-Za-z_]\\w*)?((vdf|valve)))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.directive.string.vdf.jai'},
            2: {name: 'constant.other.stringdelimiter.here.embed.vdf.jai'},
            4: {
              name: 'constant.other.stringdelimiter.here.embed.language.vdf.jai'
            }
          },
          contentName: 'string.unquoted.here.embed.vdf.jai',
          end: '\\s*(\\3)(\\4)',
          endCaptures: {
            1: {name: 'constant.other.stringdelimiter.here.embed.vdf.jai'},
            2: {
              name: 'constant.other.stringdelimiter.here.embed.language.vdf.jai'
            }
          },
          name: 'string.here.embed.vdf.jai',
          patterns: []
        },
        {
          begin: '(#string)\\s+((?i)([A-Za-z_]\\w*)?(x(86_)?64))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.directive.string.x64.jai'},
            2: {name: 'constant.other.stringdelimiter.here.embed.x64.jai'},
            4: {
              name: 'constant.other.stringdelimiter.here.embed.language.x64.jai'
            }
          },
          contentName: 'string.unquoted.here.embed.x64.jai',
          end: '\\s*(\\3)(\\4)',
          endCaptures: {
            1: {name: 'constant.other.stringdelimiter.here.embed.x64.jai'},
            2: {
              name: 'constant.other.stringdelimiter.here.embed.language.x64.jai'
            }
          },
          name: 'string.here.embed.x64.jai',
          patterns: []
        },
        {
          begin: '(#string)\\s+((?i)([A-Za-z_]\\w*)?(yaml))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.directive.string.yaml.jai'},
            2: {name: 'constant.other.stringdelimiter.here.embed.yaml.jai'},
            4: {
              name: 'constant.other.stringdelimiter.here.embed.language.yaml.jai'
            }
          },
          contentName: 'string.unquoted.here.embed.yaml.jai',
          end: '\\s*(\\3)(\\4)',
          endCaptures: {
            1: {name: 'constant.other.stringdelimiter.here.embed.yaml.jai'},
            2: {
              name: 'constant.other.stringdelimiter.here.embed.language.yaml.jai'
            }
          },
          name: 'string.here.embed.yaml.jai',
          patterns: [{include: 'source.yaml'}]
        },
        {
          begin: '(#string)\\s+((?i)([A-Za-z_]\\w*)?(html))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.directive.string.html.jai'},
            2: {name: 'constant.other.stringdelimiter.here.embed.html.jai'},
            4: {
              name: 'constant.other.stringdelimiter.here.embed.language.html.jai'
            }
          },
          contentName: 'string.unquoted.here.embed.html.jai',
          end: '\\s*(\\3)(\\4)',
          endCaptures: {
            1: {name: 'constant.other.stringdelimiter.here.embed.html.jai'},
            2: {
              name: 'constant.other.stringdelimiter.here.embed.language.html.jai'
            }
          },
          name: 'string.here.embed.html.jai',
          patterns: []
        },
        {
          begin: '(#string)\\s+((?i)([A-Za-z_]\\w*)?((md|markdown)))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.directive.string.md.jai'},
            2: {name: 'constant.other.stringdelimiter.here.embed.md.jai'},
            4: {
              name: 'constant.other.stringdelimiter.here.embed.language.md.jai'
            }
          },
          contentName: 'string.unquoted.here.embed.md.jai',
          end: '\\s*(\\3)(\\4)',
          endCaptures: {
            1: {name: 'constant.other.stringdelimiter.here.embed.md.jai'},
            2: {
              name: 'constant.other.stringdelimiter.here.embed.language.md.jai'
            }
          },
          name: 'string.here.embed.md.jai',
          patterns: [{include: 'text.md'}]
        },
        {
          begin: '(#string)\\s+((?i)([A-Za-z_]\\w*)?(xml))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.directive.string.xml.jai'},
            2: {name: 'constant.other.stringdelimiter.here.embed.xml.jai'},
            4: {
              name: 'constant.other.stringdelimiter.here.embed.language.xml.jai'
            }
          },
          contentName: 'string.unquoted.here.embed.xml.jai',
          end: '\\s*(\\3)(\\4)',
          endCaptures: {
            1: {name: 'constant.other.stringdelimiter.here.embed.xml.jai'},
            2: {
              name: 'constant.other.stringdelimiter.here.embed.language.xml.jai'
            }
          },
          name: 'string.here.embed.xml.jai',
          patterns: [{include: 'text.xml'}]
        },
        {
          begin: '(#string)\\s+((?i)([A-Za-z_]\\w*)?(xsl))\\b',
          beginCaptures: {
            1: {name: 'keyword.other.directive.string.xsl.jai'},
            2: {name: 'constant.other.stringdelimiter.here.embed.xsl.jai'},
            4: {
              name: 'constant.other.stringdelimiter.here.embed.language.xsl.jai'
            }
          },
          contentName: 'string.unquoted.here.embed.xsl.jai',
          end: '\\s*(\\3)(\\4)',
          endCaptures: {
            1: {name: 'constant.other.stringdelimiter.here.embed.xsl.jai'},
            2: {
              name: 'constant.other.stringdelimiter.here.embed.language.xsl.jai'
            }
          },
          name: 'string.here.embed.xsl.jai',
          patterns: [{include: 'text.xml.xsl'}]
        },
        {
          begin: '(#string)\\s+([A-Za-z_]\\w*)',
          beginCaptures: {
            1: {name: 'keyword.other.directive.string.jai'},
            2: {name: 'constant.other.stringdelimiter.here.jai'}
          },
          contentName: 'string.unquoted.here.jai',
          end: '\\s*(\\2)',
          endCaptures: {1: {name: 'constant.other.stringdelimiter.here.jai'}},
          name: 'string.here.jai'
        }
      ]
    },
    structs: {
      captures: {
        1: {name: 'entity.name.struct.jai'},
        2: {name: 'keyword.declaration.jai'},
        3: {name: 'keyword.declaration.struct.jai'}
      },
      match: '\\b([a-zA-Z_](?:\\w|\\\\ *)*)\\s*(::)\\s*(struct)'
    },
    symbols: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.section.braces.end.jai'},
            2: {name: 'keyword.declaration.jai'},
            3: {name: 'punctuation.accessor.jai'},
            4: {name: 'variable.enum.jai'}
          },
          match: '(\\})\\s*(=)\\s*(\\.)([a-zA-Z_](?:\\w|\\\\ *)*)'
        },
        {match: '(::|:=|:)', name: 'keyword.declaration.jai'},
        {
          match: '(=|\\+|-|\\*|/|<|>|~|\\||&|!|\\^)+',
          name: 'keyword.operator.jai'
        },
        {match: '%', name: 'keyword.operator.percent.jai'},
        {match: '(\\.\\.)', name: 'punctuation.jai'},
        {match: '\\(', name: 'punctuation.section.parens.begin.jai'},
        {match: '\\)', name: 'punctuation.section.parens.end.jai'},
        {match: '\\{', name: 'punctuation.section.braces.begin.jai'},
        {match: '\\}', name: 'punctuation.section.braces.end.jai'},
        {match: '\\[', name: 'punctuation.section.brackets.begin.jai'},
        {match: '\\]', name: 'punctuation.section.brackets.end.jai'},
        {match: '(\\.)', name: 'punctuation.accessor.jai'},
        {match: '(,)', name: 'punctuation.separator.jai'},
        {match: '(;)', name: 'punctuation.terminator.jai'}
      ]
    },
    variables: {
      patterns: [
        {
          captures: {
            1: {name: 'variable.other.jai'},
            2: {name: 'support.variable.jai'},
            4: {patterns: [{include: '#members'}]}
          },
          match:
            '\\b((it_index|it)|([a-zA-Z_](?:\\w|\\\\ *)*))(\\.[a-zA-Z0-9_.]+)?\\b'
        }
      ],
      repository: {
        members: {
          captures: {
            1: {name: 'punctuation.accessor.jai'},
            2: {name: 'variable.other.member.jai'}
          },
          match: '(\\.)([a-zA-Z_](?:\\w|\\\\ *)*)'
        }
      }
    }
  },
  scopeName: 'source.jai'
}

export default grammar
