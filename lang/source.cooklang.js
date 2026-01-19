// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/cooklang/CookVSCode>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.cook'],
  names: ['cooklang'],
  patterns: [
    {include: '#frontmatter'},
    {include: '#comments'},
    {include: '#metadata'},
    {include: '#section'},
    {include: '#recipe_note'},
    {include: '#step'}
  ],
  repository: {
    comments: {
      patterns: [
        {
          begin: '(?<!-)--(?!-)',
          beginCaptures: {0: {name: 'punctuation.definition.comment.cooklang'}},
          contentName: 'comment.line.double-dash.cooklang',
          end: '$\\n?',
          match: '(?<!-)--(?!-)',
          name: 'punctuation.definition.comment.cooklang'
        },
        {
          begin: '(\\[-)(?:\\s*((@)internal)(?=\\s|(-])))?',
          beginCaptures: {
            1: {name: 'punctuation.definition.comment.cooklang'},
            2: {name: 'storage.type.internaldeclaration.cooklang'},
            3: {name: 'punctuation.decorator.internaldeclaration.cooklang'}
          },
          end: '-]',
          endCaptures: {0: {name: 'punctuation.definition.comment.cooklang'}},
          name: 'comment.block.cooklang'
        }
      ]
    },
    equipment: {
      patterns: [
        {
          captures: {
            1: {
              name: 'keyword.cooklang.punctuation.definition.equipment.cooklang'
            },
            2: {
              name: 'entity.name.tag.css.cooklang.entity.name.tag.equipment.one-word.cooklang'
            },
            3: {
              name: 'keyword.cooklang.punctuation.definition.equipment.details.begin.cooklang'
            },
            4: {
              name: 'keyword.cooklang.punctuation.definition.equipment.details.end.cooklang'
            }
          },
          match: '(#)(\\w*?)({)[^}]*?(})'
        },
        {
          captures: {
            1: {
              name: 'keyword.cooklang.punctuation.definition.equipment.cooklang'
            },
            2: {
              name: 'entity.name.tag.css.cooklang.entity.name.tag.equipment.one-word.cooklang'
            },
            3: {name: 'invalid.illegal.expected-end-of-details.cooklang'},
            4: {name: 'invalid.illegal.expected-end-of-details.cooklang'}
          },
          match: '(#)(\\w*?)({)(.*?)$'
        },
        {
          captures: {
            1: {
              name: 'keyword.cooklang.punctuation.definition.equipment.cooklang'
            },
            2: {
              name: 'entity.name.tag.css.cooklang.entity.name.tag.equipment.multi-word.cooklang'
            },
            3: {
              name: 'keyword.cooklang.punctuation.definition.equipment.details.begin.cooklang'
            },
            4: {
              name: 'keyword.cooklang.punctuation.definition.equipment.details.end.cooklang'
            }
          },
          match: '(#)([^@#~]+?)({)[^{]*?(})'
        },
        {
          captures: {
            1: {
              name: 'keyword.cooklang.punctuation.definition.equipment.cooklang'
            },
            2: {
              name: 'entity.name.tag.css.cooklang.entity.name.tag.equipment.multi-word.cooklang'
            },
            3: {name: 'invalid.illegal.expected-end-of-details.cooklang'},
            4: {name: 'invalid.illegal.expected-end-of-details.cooklang'}
          },
          match: '(#)([^@#~]+?)({)(.*?)$'
        },
        {
          captures: {
            1: {
              name: 'keyword.cooklang.punctuation.definition.equipment.cooklang'
            },
            2: {
              name: 'entity.name.tag.css.cooklang.entity.name.tag.equipment.one-word.cooklang'
            }
          },
          match: '(#)(.+?)\\b'
        },
        {
          match: '(#)',
          name: 'keyword.cooklang.punctuation.definition.equipment.cooklang'
        }
      ]
    },
    frontmatter: {
      patterns: [
        {
          begin: '\\A-{3}\\s*$',
          beginCaptures: {
            0: {name: 'punctuation.definition.frontmatter.begin.cooklang'}
          },
          contentName: 'meta.embedded.block.frontmatter',
          patterns: [{include: 'source.yaml'}],
          while: '^(?!(-{3}|\\.{3})\\s*$)'
        }
      ]
    },
    ingredient: {
      patterns: [
        {
          captures: {
            1: {
              name: 'keyword.cooklang.punctuation.definition.ingredient.cooklang'
            },
            2: {
              name: 'keyword.cooklang.punctuation.definition.ingredient.modifier.begin.cooklang'
            },
            3: {name: 'entity.name.type.ingredient.modifier.cooklang'},
            4: {
              name: 'keyword.cooklang.punctuation.definition.ingredient.modifier.end.cooklang'
            }
          },
          match: '(@)(\\()([^)]*?)(\\))'
        },
        {
          captures: {
            1: {
              name: 'keyword.cooklang.punctuation.definition.ingredient.cooklang'
            },
            2: {name: 'invalid.illegal.expected-end-of-modifier.cooklang'},
            3: {name: 'invalid.illegal.expected-end-of-modifier.cooklang'}
          },
          match: '(@)(\\()(.*?)$'
        },
        {
          captures: {
            1: {
              name: 'keyword.cooklang.punctuation.definition.ingredient.cooklang'
            },
            2: {patterns: [{include: '#ingredient_word'}]},
            3: {
              name: 'keyword.cooklang.punctuation.definition.ingredient.amount.begin.cooklang'
            },
            4: {patterns: [{include: '#ingredient_amount'}]},
            5: {
              name: 'keyword.cooklang.punctuation.definition.ingredient.amount.end.cooklang'
            },
            6: {
              name: 'keyword.cooklang.punctuation.definition.ingredient.modifier.begin.cooklang'
            },
            7: {name: 'entity.name.type.ingredient.modifier.cooklang'},
            8: {
              name: 'keyword.cooklang.punctuation.definition.ingredient.modifier.end.cooklang'
            }
          },
          match: '(@)(\\w*?|[^@#~]+?)({)([^}]*?)(})(\\()([^)]*?)(\\))'
        },
        {
          captures: {
            1: {
              name: 'keyword.cooklang.punctuation.definition.ingredient.cooklang'
            },
            2: {patterns: [{include: '#ingredient_word'}]},
            3: {
              name: 'keyword.cooklang.punctuation.definition.ingredient.amount.begin.cooklang'
            },
            4: {patterns: [{include: '#ingredient_amount'}]},
            5: {
              name: 'keyword.cooklang.punctuation.definition.ingredient.amount.end.cooklang'
            },
            6: {name: 'invalid.illegal.expected-end-of-modifier.cooklang'},
            7: {name: 'invalid.illegal.expected-end-of-modifier.cooklang'}
          },
          match: '(@)(\\w*?|[^@#~]+?)({)([^}]*?)(})(\\()(.*?)$'
        },
        {
          captures: {
            1: {
              name: 'keyword.cooklang.punctuation.definition.ingredient.cooklang'
            },
            2: {patterns: [{include: '#ingredient_word'}]},
            3: {
              name: 'keyword.cooklang.punctuation.definition.ingredient.amount.begin.cooklang'
            },
            4: {patterns: [{include: '#ingredient_amount'}]},
            5: {
              name: 'keyword.cooklang.punctuation.definition.ingredient.amount.end.cooklang'
            }
          },
          match: '(@)(\\w*?|[^@#~]+?)({)([^}]*?)(})'
        },
        {
          captures: {
            1: {
              name: 'keyword.cooklang.punctuation.definition.ingredient.cooklang'
            },
            2: {patterns: [{include: '#ingredient_word'}]},
            3: {name: 'invalid.illegal.expected-end-of-amount.cooklang'},
            4: {name: 'invalid.illegal.expected-end-of-amount.cooklang'}
          },
          match: '(@)(\\w*?|[^@#~]+?)({)([^}]*?)$'
        },
        {
          captures: {
            1: {
              name: 'keyword.cooklang.punctuation.definition.ingredient.cooklang'
            },
            2: {
              name: 'entity.name.tag.css.cooklang.entity.name.tag.ingredient.one-word.cooklang'
            }
          },
          match: '(@)(.+?)\\b'
        },
        {
          match: '(@)',
          name: 'keyword.cooklang.punctuation.definition.ingredient.cooklang'
        }
      ]
    },
    ingredient_amount: {
      patterns: [
        {
          match: '(\\d+)',
          name: 'meta.number.integer.decimal.cooklang constant.numeric.value.cooklang'
        },
        {
          match: '([^}%]+?(?=}|%|$))',
          name: 'constant.string.ingredient.amount.cooklang'
        },
        {
          match: '(%)',
          name: 'keyword.cooklang.punctuation.definition.ingredient.amount.separator.cooklang'
        },
        {match: '(\\|)', name: 'punctuation.separator.sequence.cooklang'},
        {match: '([/*])', name: 'keyword.operator.arithmetic.cooklang'}
      ]
    },
    ingredient_word: {
      patterns: [
        {
          match: '(\\w*?)$',
          name: 'entity.name.tag.css.cooklang.entity.name.tag.ingredient.one-word.cooklang'
        },
        {
          match: '([^@#~]+?)$',
          name: 'entity.name.tag.css.cooklang.entity.name.tag.ingredient.multi-word.cooklang'
        }
      ]
    },
    metadata: {
      patterns: [
        {
          match: '(^>>)$',
          name: 'keyword.cooklang.punctuation.section.mapping.begin.cooklang'
        },
        {
          captures: {
            1: {
              name: 'keyword.cooklang.punctuation.section.mapping.begin.cooklang'
            },
            2: {name: 'invalid.illegal.expected-mapping-key.cooklang'}
          },
          match: '(^>>)([^:]+?)$'
        },
        {
          captures: {
            1: {
              name: 'keyword.cooklang.punctuation.section.mapping.begin.cooklang'
            },
            2: {
              name: 'entity.name.tag.metadata.cooklang string.unquoted.plain.out.cooklang'
            },
            3: {name: 'invalid.illegal.expected-mapping-key.cooklang'}
          },
          match: '(^>>)([^:]+?)(:\\s*?)$'
        },
        {
          captures: {
            1: {
              name: 'keyword.cooklang.punctuation.section.mapping.begin.cooklang'
            },
            2: {
              name: 'entity.name.tag.metadata.cooklang string.unquoted.plain.out.cooklang'
            },
            3: {
              name: 'keyword.cooklang.punctuation.separator.mapping.key-value.cooklang'
            },
            4: {
              name: 'value.metadata.cooklang string.unquoted.plain.out.cooklang'
            }
          },
          match: '(^>>)([^:]+?)(:)(.*?)$'
        }
      ]
    },
    recipe_note: {
      patterns: [
        {
          begin: '^>',
          beginCaptures: {0: {name: 'punctuation.definition.note.cooklang'}},
          contentName: 'comment.block.documentation.cooklang',
          end: '$\\n?',
          patterns: [{match: '.+', name: 'string.quoted.other.cooklang'}]
        }
      ]
    },
    section: {
      patterns: [
        {
          captures: {
            1: {name: 'punctuation.definition.heading.begin.cooklang'},
            2: {name: 'entity.name.section.cooklang markup.heading.cooklang'},
            3: {name: 'punctuation.definition.heading.end.cooklang'}
          },
          match: '^(={1,})([^=]+)(={1,})?$'
        }
      ]
    },
    step: {
      patterns: [
        {include: '#ingredient'},
        {include: '#equipment'},
        {include: '#timer'}
      ]
    },
    timer: {
      patterns: [
        {
          match: '(~)$',
          name: 'keyword.cooklang.punctuation.definition.timer.cooklang'
        },
        {
          captures: {
            1: {name: 'keyword.cooklang.punctuation.definition.timer.cooklang'},
            2: {patterns: [{include: '#timer_word'}]},
            3: {name: 'invalid.illegal.expected-duration.cooklang'}
          },
          match: '(~)(\\w*?|[^@#~]+?)({\\s*?})'
        },
        {
          captures: {
            1: {name: 'keyword.cooklang.punctuation.definition.timer.cooklang'},
            2: {patterns: [{include: '#timer_word'}]},
            3: {
              name: 'keyword.cooklang.punctuation.definition.timer.duration.begin.cooklang'
            },
            4: {patterns: [{include: '#timer_duration'}]},
            5: {
              name: 'keyword.cooklang.punctuation.definition.timer.duration.end.cooklang'
            }
          },
          match: '(~)(\\w*?|[^@#~]+?)({)([^}]*?)(})'
        },
        {
          captures: {
            1: {name: 'keyword.cooklang.punctuation.definition.timer.cooklang'},
            2: {patterns: [{include: '#timer_word'}]},
            3: {name: 'invalid.illegal.expected-end-of-duration.cooklang'},
            4: {name: 'invalid.illegal.expected-end-of-duration.cooklang'}
          },
          match: '(~)(\\w*?|[^@#~]+?)({)(.*?)$'
        },
        {
          captures: {
            1: {name: 'keyword.cooklang.punctuation.definition.timer.cooklang'},
            2: {name: 'invalid.illegal.expected-begining-of-duration.cooklang'}
          },
          match: '(~)([^@#~]+?)$'
        }
      ]
    },
    timer_duration: {
      patterns: [
        {
          match: '(\\d+)',
          name: 'meta.number.integer.decimal.cooklang constant.numeric.value.cooklang'
        },
        {match: '([^}%]+?)', name: 'constant.string.timer.duration.cooklang'},
        {
          match: '(%)',
          name: 'keyword.cooklang.punctuation.definition.timer.duration.separator.cooklang'
        }
      ]
    },
    timer_word: {
      patterns: [
        {
          match: '(\\w+?)$',
          name: 'entity.name.tag.css.cooklang.entity.name.tag.timer.one-word.cooklang'
        },
        {
          match: '([^@#~]+?)$',
          name: 'entity.name.tag.css.cooklang.entity.name.tag.timer.multi-word.cooklang'
        }
      ]
    }
  },
  scopeName: 'source.cooklang'
}

export default grammar
