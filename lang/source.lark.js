// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-grammars>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.lark'],
  names: ['lark'],
  patterns: [
    {
      begin: '\\A#!',
      beginCaptures: {0: {name: 'punctuation.definition.comment.shebang.lark'}},
      end: '$',
      name: 'comment.line.number-sign.shebang.lark'
    },
    {include: '#main'}
  ],
  repository: {
    alias: {
      captures: {
        1: {name: 'storage.type.alias.lark'},
        2: {name: 'entity.name.alias.lark'},
        3: {patterns: [{include: '#name-prefix'}]}
      },
      match: '(->)\\s*((!?[_?]|!)?[a-zA-Z][_a-zA-Z0-9]*)?',
      name: 'meta.alias.lark'
    },
    comma: {
      match: ',',
      name: 'punctuation.delimiter.separator.list.comma.lark'
    },
    comment: {
      begin: '//',
      beginCaptures: {0: {name: 'punctuation.definition.comment.lark'}},
      end: '$',
      name: 'comment.line.double-slash.lark'
    },
    definition: {
      patterns: [
        {
          begin: '^\\s*((!?[_?]|!)?[A-Z][_A-Z0-9]*)\\s*(\\.[-+.\\d]+\\s*)?(:)',
          beginCaptures: {
            1: {name: 'entity.name.terminal.lark'},
            2: {patterns: [{include: '#name-prefix'}]},
            3: {patterns: [{include: '#priority'}]},
            4: {name: 'keyword.operator.assignment.lark'}
          },
          end: '(?!\\G|^\\s*$)(?=^\\s*[^\\s|])',
          name: 'meta.definition.terminal.lark',
          patterns: [{include: '#definition-innards'}]
        },
        {
          begin: '^\\s*((!?[_?]|!)?[a-z][_a-z0-9]*)\\s*(\\.[-+.\\d]+\\s*)?(:)',
          beginCaptures: {
            1: {name: 'entity.name.rule.lark'},
            2: {patterns: [{include: '#name-prefix'}]},
            3: {patterns: [{include: '#priority'}]},
            4: {name: 'keyword.operator.assignment.lark'}
          },
          end: '(?!\\G|^\\s*$)(?=^\\s*[^\\s|])',
          name: 'meta.definition.rule.lark',
          patterns: [{include: '#definition-innards'}]
        }
      ]
    },
    'definition-innards': {
      patterns: [
        {include: '#groups'},
        {include: '#alias'},
        {include: '#operators'},
        {include: '#comment'},
        {include: '#string'},
        {include: '#regexp'},
        {include: '#flags'},
        {include: '#range'},
        {include: '#template-usage'},
        {include: '#name'},
        {include: '#comma'}
      ]
    },
    directives: {
      patterns: [
        {
          begin: '(?:^|\\G)\\s*((%)import)(?=\\s|$)',
          beginCaptures: {
            1: {name: 'keyword.control.directive.import.lark'},
            2: {name: 'punctuation.definition.directive.lark'}
          },
          end: '$',
          name: 'meta.directive.import.lark',
          patterns: [
            {
              begin: '\\G\\s+(\\.?\\w+(?:\\.\\w+)*+)(?=\\s|$)[ \\t]*',
              beginCaptures: {
                0: {name: 'meta.module-reference.lark'},
                1: {
                  name: 'string.unquoted.module.import.lark',
                  patterns: [{include: '#dot'}, {include: '#name'}]
                }
              },
              end: '(?=$)',
              name: 'meta.import-specification.lark',
              patterns: [
                {include: '#alias'},
                {include: '#name-list'},
                {include: '#comment'}
              ]
            },
            {include: '#comment'}
          ]
        },
        {
          begin: '(?:^|\\G)\\s*((%)(?!_)([A-Za-z_]+))(?=\\s|$)',
          beginCaptures: {
            1: {name: 'keyword.control.directive.$3.lark'},
            2: {name: 'punctuation.definition.directive.lark'}
          },
          end: '(?!\\G|^\\s*$)(?=^\\s*[^\\s|])',
          name: 'meta.directive.$3.lark',
          patterns: [{include: '#definition-innards'}]
        }
      ]
    },
    dot: {
      match: '\\.',
      name: 'punctuation.delimiter.separator.period.dot.lark'
    },
    flags: {match: '(?<=/|")[imslux]+', name: 'storage.modifier.flags.lark'},
    groups: {
      patterns: [
        {
          begin: '\\(',
          beginCaptures: {
            0: {name: 'punctuation.section.group.round.bracket.begin.lark'}
          },
          end: '\\)',
          endCaptures: {
            0: {name: 'punctuation.section.group.round.bracket.end.lark'}
          },
          name: 'meta.group.lark',
          patterns: [{include: '#definition-innards'}]
        },
        {
          begin: '\\[',
          beginCaptures: {
            0: {name: 'punctuation.section.group.square.bracket.begin.lark'}
          },
          end: '\\]',
          endCaptures: {
            0: {name: 'punctuation.section.group.square.bracket.end.lark'}
          },
          name: 'meta.group.lark',
          patterns: [{include: '#definition-innards'}]
        }
      ]
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#template'},
        {include: '#definition'},
        {include: '#directives'}
      ]
    },
    name: {
      captures: {1: {patterns: [{include: '#name-prefix'}]}},
      match: '(!?[_?]|!)?(?:[A-Z][_A-Z0-9]*|[a-z][_a-z0-9]*)',
      name: 'variable.definition.reference.lark'
    },
    'name-list': {
      begin: '\\G\\s*(\\()',
      beginCaptures: {
        1: {name: 'punctuation.definition.name-list.round.bracket.begin.lark'}
      },
      end: '\\)',
      endCaptures: {
        0: {name: 'punctuation.definition.name-list.round.bracket.end.lark'}
      },
      name: 'meta.name-list.lark',
      patterns: [{include: '#name'}, {include: '#comma'}, {include: '#comment'}]
    },
    'name-prefix': {
      captures: {1: {name: 'punctuation.definition.name.lark'}},
      match: '(?:\\G|^)(!?[_?]|!)',
      name: 'storage.modifier.tree-shaping.lark'
    },
    number: {
      match: '-?\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?',
      name: 'constant.numeric.decimal.lark'
    },
    operators: {
      patterns: [
        {match: '\\|', name: 'keyword.operator.logical.or.lark'},
        {match: '[+*?]', name: 'keyword.operator.quantifier.lark'},
        {
          captures: {
            1: {name: 'keyword.operator.quantifier.arbitrary.lark'},
            2: {patterns: [{include: '#number'}]},
            3: {name: 'punctuation.separator.range.quantities.lark'},
            4: {patterns: [{include: '#number'}]}
          },
          match: '(~)\\s*(\\d+)(?:(\\.\\.)(\\d+))?',
          name: 'meta.exact-quantity.lark'
        }
      ]
    },
    priority: {
      begin: '(?:\\G|^)\\.',
      beginCaptures: {0: {patterns: [{include: '#dot'}]}},
      end: '$|(?=:)',
      name: 'meta.priority.lark',
      patterns: [{include: '#number'}]
    },
    range: {
      match: '(?<=")\\.\\.',
      name: 'punctuation.separator.range.characters.lark'
    },
    regexp: {
      begin: '/(?!/)',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.lark'}},
      end: '/',
      endCaptures: {0: {name: 'punctuation.definition.string.end.lark'}},
      name: 'string.regexp.lark',
      patterns: [{include: 'source.regexp.python'}]
    },
    string: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.lark'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.lark'}},
      name: 'string.quoted.double.lark',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.lark'}]
    },
    template: {
      begin: '^\\s*((!?[_?]|!)?\\w+)\\s*(?={.*?}\\s*:)',
      beginCaptures: {
        1: {name: 'entity.name.template.function.lark'},
        2: {patterns: [{include: '#name-prefix'}]}
      },
      end: '(?!\\G|^\\s*$)(?=^\\s*[^\\s|])',
      name: 'meta.definition.template.lark',
      patterns: [{include: '#template-args'}, {include: '#definition-innards'}]
    },
    'template-args': {
      begin: '\\G\\s*({)',
      beginCaptures: {
        1: {name: 'punctuation.definition.parameters.begin.lark'}
      },
      end: '(})(?:\\s*(:))?|(?=\\s*$)',
      endCaptures: {
        1: {name: 'punctuation.definition.parameters.end.lark'},
        2: {name: 'keyword.operator.assignment.lark'}
      },
      name: 'meta.function.parameters.lark',
      patterns: [
        {include: '#template-usage'},
        {match: '\\w+', name: 'variable.parameter.template.argument.lark'},
        {include: '#definition-innards'}
      ]
    },
    'template-usage': {
      begin: '((!?[_?]|!)?\\w+)\\s*(?={)',
      beginCaptures: {
        1: {name: 'entity.name.template.function.lark'},
        2: {patterns: [{include: '#name-prefix'}]}
      },
      end: '(?!\\G)',
      name: 'meta.function-call.lark',
      patterns: [{include: '#template-args'}]
    }
  },
  scopeName: 'source.lark'
}

export default grammar
