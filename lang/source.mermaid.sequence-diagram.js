// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-mermaid>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.json', 'source.mermaid'],
  extensions: [],
  names: [],
  patterns: [{include: '#main'}],
  repository: {
    activation: {
      match: '(?i)(?:\\G|^|(?<=\\s|;|%%))((?:de)?activate)(?=$|\\s|;)',
      name: 'keyword.operator.${1:/downcase}.mermaid'
    },
    actor: {
      begin: '(?i)(?:\\G|^|(?<=\\s|;|%%))(actor|participant)(?=$|\\s|;)[ \\t]*',
      beginCaptures: {1: {name: 'storage.modifier.${1:/downcase}.mermaid'}},
      end: '(?!\\G)|(?=\\s*(?:$|;))',
      name: 'meta.definition.mermaid',
      patterns: [{include: '#name'}]
    },
    alt: {
      begin: '(?i)(?:\\G|^|(?<=\\s|;|%%))\\s*(alt)(?=$|\\s|;)',
      beginCaptures: {
        1: {name: 'keyword.control.flow.alternation.begin.mermaid'}
      },
      end: '(?i)(?:\\G|^|(?<=\\s|;|%%))\\s*(end)(?=$|\\s|;)',
      endCaptures: {1: {name: 'keyword.control.flow.alternation.end.mermaid'}},
      name: 'meta.alternation.block.mermaid',
      patterns: [
        {
          begin: '\\G',
          end: '(?i)(?=(?:^|(?<=\\s|;|%%))\\s*(?:end|else)(?:$|\\s|;))',
          name: 'meta.branch.if.mermaid',
          patterns: [{include: '#alt-innards'}]
        },
        {
          begin: '(?i)(?:^|(?<=\\s|;|%%))\\s*(else)(?=$|\\s|;)',
          beginCaptures: {
            1: {name: 'keyword.control.flow.alternation.else.mermaid'}
          },
          end: '(?i)(?=(?:^|(?<=\\s|;|%%))\\s*end(?:$|\\s|;))',
          name: 'meta.branch.else.mermaid',
          patterns: [{include: '#alt-innards'}]
        }
      ]
    },
    'alt-innards': {
      patterns: [
        {
          begin: '\\G[ \\t]*(?=\\S)',
          contentName: 'string.unquoted.condition-text.mermaid',
          end: '(?=\\s*(?:$|;))',
          patterns: [{include: '#string-innards'}]
        },
        {include: '#main'}
      ]
    },
    autonumber: {
      match: '(?i)(?:\\G|^|(?<=\\s|;|%%))autonumber(?=$|\\s|;)',
      name: 'keyword.operator.autonumber.mermaid'
    },
    break: {
      begin: '(?i)(?:\\G|^|(?<=\\s|;|%%))break(?=$|\\s|;)',
      beginCaptures: {0: {name: 'keyword.control.flow.break.begin.mermaid'}},
      end: '(?i)(?:\\G|^|(?<=\\s|;|%%))end(?=$|\\s|;)',
      endCaptures: {0: {name: 'keyword.control.flow.break.end.mermaid'}},
      name: 'meta.break.block.mermaid',
      patterns: [
        {
          begin: '\\G[ \\t]*(?=\\S)',
          contentName: 'string.unquoted.break-text.mermaid',
          end: '(?=\\s*(?:$|;))',
          patterns: [{include: '#string-innards'}]
        },
        {include: '#main'}
      ]
    },
    critical: {
      begin: '(?i)(?:\\G|^|(?<=\\s|;|%%))\\s*(critical)(?=$|\\s|;)',
      beginCaptures: {
        1: {name: 'keyword.control.flow.requirements.begin.mermaid'}
      },
      end: '(?i)(?:\\G|^|(?<=\\s|;|%%))\\s*(end)(?=$|\\s|;)',
      endCaptures: {1: {name: 'keyword.control.flow.requirements.end.mermaid'}},
      name: 'meta.requirements.block.mermaid',
      patterns: [
        {
          begin: '\\G',
          end: '(?i)(?=(?:^|(?<=\\s|;|%%))\\s*(?:option|end)(?:$|\\s|;))',
          name: 'meta.branch.required.first.mermaid',
          patterns: [{include: '#alt-innards'}]
        },
        {
          begin: '(?i)(?:^|(?<=\\s|;|%%))\\s*(option)(?=$|\\s|;)',
          beginCaptures: {1: {name: 'keyword.control.flow.option.mermaid'}},
          end: '(?i)(?=(?:^|(?<=\\s|;|%%))\\s*(?:option|end)(?:$|\\s|;))',
          name: 'meta.branch.required.rest.mermaid',
          patterns: [{include: '#alt-innards'}]
        }
      ]
    },
    loop: {
      begin: '(?i)(?:\\G|^|(?<=\\s|;|%%))loop(?=$|\\s|;)',
      beginCaptures: {0: {name: 'keyword.control.loop.begin.mermaid'}},
      end: '(?i)(?:\\G|^|(?<=\\s|;|%%))end(?=$|\\s|;)',
      endCaptures: {0: {name: 'keyword.control.loop.end.mermaid'}},
      name: 'meta.loop.block.mermaid',
      patterns: [
        {
          begin: '\\G[ \\t]*(?=\\S)',
          contentName: 'string.unquoted.loop-text.mermaid',
          end: '(?=\\s*(?:$|;))',
          patterns: [{include: '#string-innards'}]
        },
        {include: '#main'}
      ]
    },
    main: {
      patterns: [
        {include: 'source.mermaid#a11y'},
        {include: 'source.mermaid#terminator'},
        {include: 'source.mermaid#directive'},
        {include: 'source.mermaid#comment'},
        {include: '#message'},
        {include: '#autonumber'},
        {include: '#activation'},
        {include: '#actor'},
        {include: '#note'},
        {include: '#loop'},
        {include: '#alt'},
        {include: '#opt'},
        {include: '#par'},
        {include: '#critical'},
        {include: '#break'},
        {include: '#rect'},
        {include: '#menu'},
        {include: '#name'},
        {include: '#signal'}
      ]
    },
    menu: {patterns: [{include: '#menu-single'}, {include: '#menu-json'}]},
    'menu-json': {
      begin: '(?i)(?:\\G|^|(?<=\\s|;|%%))links(?=$|\\s|;)',
      beginCaptures: {0: {name: 'storage.type.menu.mermaid'}},
      end: '(?=\\s*(?:$|;))',
      name: 'meta.menu.mermaid',
      patterns: [
        {
          applyEndPatternLast: true,
          begin: '\\G',
          end: '(?!\\G)',
          name: 'meta.lhs.mermaid',
          patterns: [{include: '#name'}]
        },
        {
          applyEndPatternLast: true,
          begin: ':[ \\t]*',
          beginCaptures: {
            0: {name: 'keyword.operator.assignment.mermaid'},
            1: {name: 'punctuation.separator.menu.key-value.mermaid'}
          },
          end: '(?!\\G)',
          patterns: [{include: 'source.json'}]
        }
      ]
    },
    'menu-single': {
      begin: '(?i)(?:\\G|^|(?<=\\s|;|%%))link(?=$|\\s|;)',
      beginCaptures: {0: {name: 'storage.type.menu-link.mermaid'}},
      end: '(?=\\s*(?:$|;))',
      name: 'meta.menu-link.mermaid',
      patterns: [
        {
          applyEndPatternLast: true,
          begin: '\\G',
          end: '(?!\\G)',
          name: 'meta.lhs.mermaid',
          patterns: [{include: '#name'}]
        },
        {
          applyEndPatternLast: true,
          begin: ':',
          beginCaptures: {
            0: {name: 'keyword.operator.assignment.mermaid'},
            1: {name: 'punctuation.separator.link.key-value.mermaid'}
          },
          end: '(?!\\G)',
          name: 'meta.rhs.mermaid',
          patterns: [
            {
              captures: {
                1: {
                  name: 'string.unquoted.link-text.mermaid',
                  patterns: [{include: '#string-innards'}]
                },
                2: {name: 'keyword.operator.assignment.mermaid'},
                3: {name: 'punctuation.separator.link-spec.mermaid'}
              },
              match: '\\G\\s*([^;@]*)\\s*((@))',
              name: 'meta.link-text.mermaid'
            },
            {
              begin: '(?:(?<=@)|(?<=:)\\G)[ \\t]*(?![^;]*@)',
              contentName: 'constant.other.reference.link.mermaid',
              end: '(?=\\s*(?:$|;))',
              name: 'meta.link-target.mermaid',
              patterns: [{include: '#string-innards'}]
            }
          ]
        }
      ]
    },
    message: {
      begin: '((:))[ \\t]*',
      beginCaptures: {
        1: {name: 'keyword.operator.assignment.mermaid'},
        2: {name: 'punctuation.separator.message.key-value.mermaid'}
      },
      contentName: 'string.unquoted.message-text.mermaid',
      end: '(?=[ \\t]*(?:$|;))',
      name: 'meta.message.mermaid',
      patterns: [{include: '#string-innards'}]
    },
    name: {
      captures: {
        1: {name: 'entity.name.tag.actor.mermaid'},
        2: {name: 'keyword.operator.alias.mermaid'}
      },
      match:
        '(?ix)\n(\n\t(?=\\S)\n\t(?:[^-+>:,;\\s]+|\\s+(?!as(?:$|\\s)))++\n\t(?:\n\t\t(?!--?[x\\x29])\n\t\t(?:-*[^-+>:,;\\s]+|\\s+(?!as(?:$|\\s)))\n\t)*?\n)\n(?:\\s+(as)(?=$|\\s|;))?',
      name: 'meta.name.mermaid'
    },
    note: {
      applyEndPatternLast: true,
      begin: '(?i)note\\s+(?:(?:left|right)\\s+of|over)(?=$|\\s)[ \\t]*',
      beginCaptures: {0: {name: 'storage.type.note.mermaid'}},
      end: '(?!\\G)|(?=\\s*(?:$|;))',
      name: 'meta.note.mermaid',
      patterns: [{include: '#name'}, {include: 'source.mermaid#comma'}]
    },
    opt: {
      begin: '(?i)(?:\\G|^|(?<=\\s|;|%%))\\s*(opt)(?=$|\\s|;)',
      beginCaptures: {1: {name: 'keyword.control.flow.option.begin.mermaid'}},
      end: '(?i)(?:\\G|^|(?<=\\s|;|%%))\\s*(end)(?=$|\\s|;)',
      endCaptures: {1: {name: 'keyword.control.flow.option.end.mermaid'}},
      name: 'meta.option.block.mermaid',
      patterns: [{include: '#alt-innards'}]
    },
    par: {
      begin: '(?i)(?:\\G|^|(?<=\\s|;|%%))\\s*(par)(?=$|\\s|;)',
      beginCaptures: {1: {name: 'keyword.control.flow.parallel.begin.mermaid'}},
      end: '(?i)(?:\\G|^|(?<=\\s|;|%%))\\s*(end)(?=$|\\s|;)',
      endCaptures: {1: {name: 'keyword.control.flow.parallel.end.mermaid'}},
      name: 'meta.parallel.block.mermaid',
      patterns: [
        {
          begin: '\\G',
          end: '(?i)(?=(?:^|(?<=\\s|;|%%))\\s*(?:and|end)(?:$|\\s|;))',
          name: 'meta.branch.parallel.first.mermaid',
          patterns: [{include: '#alt-innards'}]
        },
        {
          begin: '(?i)(?:^|(?<=\\s|;|%%))\\s*(and)(?=$|\\s|;)',
          beginCaptures: {
            1: {name: 'keyword.control.flow.parallel.continue.mermaid'}
          },
          end: '(?i)(?=(?:^|(?<=\\s|;|%%))\\s*(?:and|end)(?:$|\\s|;))',
          name: 'meta.branch.parallel.rest.mermaid',
          patterns: [{include: '#alt-innards'}]
        }
      ]
    },
    rect: {
      begin: '(?i)(?:\\G|^|(?<=\\s|;|%%))\\s*(rect)(?=$|\\s|;)',
      beginCaptures: {0: {name: 'keyword.control.rectangle.begin.mermaid'}},
      end: '(?i)(?:\\G|^|(?<=\\s|;|%%))\\s*(end)(?=$|\\s|;)',
      endCaptures: {0: {name: 'keyword.control.rectangle.end.mermaid'}},
      name: 'meta.rectangle.mermaid',
      patterns: [
        {
          begin: '(?i)\\G\\s*(rgba?)(\\()',
          beginCaptures: {
            1: {name: 'support.function.colour.mermaid'},
            2: {name: 'punctuation.definition.arguments.begin.mermaid'}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.definition.arguments.end.mermaid'}
          },
          name: 'meta.function.background-colour.${1:/downcase}.mermaid',
          patterns: [
            {
              match: '[-+]?\\d+(?:\\.\\d+)?',
              name: 'constant.numeric.colour-component.mermaid'
            },
            {include: 'source.mermaid#comma'}
          ]
        },
        {include: '#main'}
      ]
    },
    signal: {
      captures: {
        1: {name: 'keyword.operator.link.mermaid'},
        2: {name: 'keyword.operator.deactivate.mermaid'},
        3: {name: 'keyword.operator.activate.mermaid'}
      },
      match: '(--?(?:>>?|x|\\)))(?:[ \\t]*(?:(-)|(\\+)))?',
      name: 'meta.signal.mermaid'
    },
    'string-innards': {patterns: [{include: 'source.mermaid#entity'}]}
  },
  scopeName: 'source.mermaid.sequence-diagram'
}

export default grammar
