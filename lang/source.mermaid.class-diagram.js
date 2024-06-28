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
  dependencies: ['source.mermaid', 'source.mermaid.flowchart'],
  extensions: [],
  names: [],
  patterns: [{include: '#main'}],
  repository: {
    annotation: {
      begin: '(<<)',
      beginCaptures: {
        0: {name: 'punctuation.definition.annotation.begin.mermaid'},
        1: {name: 'sublimelinter.gutter-mark'}
      },
      contentName: 'entity.name.tag.annotation.mermaid',
      end: '(>>)',
      endCaptures: {
        0: {name: 'punctuation.definition.annotation.end.mermaid'},
        1: {name: 'sublimelinter.gutter-mark'}
      },
      name: 'meta.annotation.mermaid'
    },
    'annotation-statement': {
      captures: {
        1: {patterns: [{include: '#annotation'}]},
        2: {name: 'entity.name.type.class.mermaid'}
      },
      match: '^\\s*(<<.*?>>)(?:\\s+((?=[a-zA-Z])\\w+)(?=\\s*(?:$|[^{}\\s])))?',
      name: 'meta.annotation.statement.mermaid'
    },
    cardinality: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.mermaid'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.mermaid'}},
      name: 'string.quoted.double.cardinality.mermaid',
      patterns: [
        {match: '\\*', name: 'constant.language.variable-amount.mermaid'},
        {match: '\\.\\.', name: 'constant.language.range.mermaid'}
      ]
    },
    class: {
      patterns: [
        {
          begin:
            '(?x) ^\n\\s* (class)\n\\s+ ((?=[a-zA-Z])\\w+)\n(?:\\s* (~\\w+~))?\n(?:\\s* (:::) \\s* ([^\\s{}]+))?\n\\s* ({)',
          beginCaptures: {
            1: {name: 'storage.type.class.mermaid'},
            2: {name: 'entity.name.type.class.mermaid'},
            3: {patterns: [{include: '#generic'}]},
            4: {name: 'keyword.operator.css-class.mermaid'},
            5: {name: 'constant.language.css-class.mermaid'},
            6: {patterns: [{include: 'source.mermaid#brace'}]}
          },
          end: '}',
          endCaptures: {0: {patterns: [{include: 'source.mermaid#brace'}]}},
          name: 'meta.class.definition.mermaid',
          patterns: [
            {include: 'source.mermaid#comment'},
            {include: '#annotation'},
            {include: '#member'}
          ]
        },
        {
          captures: {
            1: {name: 'storage.type.class.mermaid'},
            2: {name: 'entity.name.type.class.mermaid'},
            3: {patterns: [{include: '#generic'}]},
            4: {name: 'keyword.operator.css-class.mermaid'},
            5: {name: 'constant.language.css-class.mermaid'}
          },
          match:
            '(?x) ^\n\\s* (class)\n\\s+ ((?=[a-zA-Z])\\w+(?:\\s+\\S.+?)?)\n(?: \\s* (~\\w+~))?\n(?: \\s* (:::) \\s* ([^\\s{}]+))?\n(?= \\s*)',
          name: 'meta.class.statement.mermaid'
        }
      ]
    },
    classifier: {
      patterns: [
        {
          captures: {0: {name: 'sublimelinter.gutter-mark'}},
          match: '\\*',
          name: 'storage.modifier.classifier.abstract.mermaid'
        },
        {
          captures: {0: {name: 'sublimelinter.gutter-mark'}},
          match: '\\$',
          name: 'storage.modifier.classifier.static.mermaid'
        }
      ]
    },
    generic: {
      begin: '(?:^|\\G)\\s*((~))',
      beginCaptures: {
        1: {name: 'punctuation.definition.type.begin.mermaid'},
        2: {name: 'sublimelinter.gutter-mark'}
      },
      contentName: 'entity.name.tag.type.mermaid',
      end: '(~)',
      endCaptures: {
        0: {name: 'punctuation.definition.type.end.mermaid'},
        1: {name: 'sublimelinter.gutter-mark'}
      },
      name: 'meta.generic.mermaid'
    },
    interaction: {
      begin: '^\\s*(link|callback)(?=$|\\s)',
      beginCaptures: {1: {name: 'storage.type.$1-assignment.mermaid'}},
      end: '(?!\\G)',
      name: 'meta.$1-handler.mermaid',
      patterns: [
        {
          begin: '(?<=link)\\G',
          end: '(?=\\s*$)',
          patterns: [
            {
              begin: '\\G\\s+((?=[a-zA-Z])\\w+)',
              beginCaptures: {1: {name: 'entity.name.tag.node.mermaid'}},
              end: '\\s+("[^"]*")',
              endCaptures: {
                1: {patterns: [{include: 'source.mermaid.flowchart#url'}]}
              },
              name: 'entity.name.tag.node.mermaid'
            },
            {include: 'source.mermaid.flowchart#tooltip'}
          ]
        },
        {
          begin: '(?<=callback)\\G',
          end: '(?=\\s*$)',
          patterns: [
            {
              begin: '\\G\\s+((?=[a-zA-Z])\\w+)',
              beginCaptures: {1: {name: 'entity.name.tag.node.mermaid'}},
              end: '\\s+((")[^"]*("))',
              endCaptures: {
                1: {name: 'string.quoted.double.callback-name.mermaid'},
                2: {name: 'punctuation.definition.string.begin.mermaid'},
                3: {name: 'punctuation.definition.string.end.mermaid'}
              },
              name: 'entity.name.tag.node.mermaid'
            },
            {include: 'source.mermaid.flowchart#tooltip'}
          ]
        }
      ]
    },
    main: {
      patterns: [
        {include: 'source.mermaid#a11y'},
        {include: 'source.mermaid#directive'},
        {include: 'source.mermaid#comment'},
        {include: 'source.mermaid#direction'},
        {include: '#annotation-statement'},
        {include: '#relation'},
        {include: '#class'},
        {include: '#member-statement'},
        {include: '#interaction'},
        {include: 'source.mermaid.flowchart#click'}
      ]
    },
    member: {
      patterns: [
        {
          begin: '([-+#~]\\s*|(?![-+#~]))(?!})([^\\s\\(]+)(?=\\()',
          beginCaptures: {
            1: {patterns: [{include: '#visibility'}]},
            2: {name: 'entity.name.function.member.method.mermaid'}
          },
          end: '(?<=\\))(?:\\s*([*$]))?(?:\\s+(\\S+?)(\\s*~[^~]+~\\s*)?)?(?=$|\\s)',
          endCaptures: {
            1: {patterns: [{include: '#classifier'}]},
            2: {name: 'storage.type.return-value.mermaid'},
            3: {patterns: [{include: '#generic'}]}
          },
          name: 'meta.member.method.mermaid',
          patterns: [{include: '#params'}]
        },
        {
          begin:
            '([-+#~]\\s*|(?![-+#~]))(?!})([^\\s\\(]+?)(\\s*~[^~]+~\\s*)?(?=$|\\s)',
          beginCaptures: {
            1: {patterns: [{include: '#visibility'}]},
            2: {name: 'storage.type.attribute.mermaid'},
            3: {patterns: [{include: '#generic'}]}
          },
          end: '\\S+|(?=\\s*$)',
          endCaptures: {0: {name: 'entity.name.member.mermaid'}},
          name: 'meta.member.attribute.mermaid'
        }
      ]
    },
    'member-statement': {
      applyEndPatternLast: true,
      begin: '^\\s*((?=[a-zA-Z])\\w+)\\s*(:)[ \\t]*',
      beginCaptures: {
        1: {name: 'entity.name.type.class.mermaid'},
        2: {patterns: [{include: 'source.mermaid#colon'}]}
      },
      end: '(?!\\G)',
      name: 'meta.member.statement.mermaid',
      patterns: [{include: '#member'}]
    },
    params: {
      begin: '\\G\\(',
      beginCaptures: {
        0: {name: 'punctuation.definition.parameters.begin.mermaid'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.definition.parameters.end.mermaid'}},
      name: 'meta.parameters.mermaid',
      patterns: [
        {
          captures: {
            1: {name: 'storage.type.parameter.mermaid'},
            2: {patterns: [{include: '#generic'}]},
            3: {name: 'variable.function.parameter.mermaid'}
          },
          match: '(?:([^\\s(),]+?)(\\s*~[^~]+~)?\\s+)?([^\\s(),]+)'
        },
        {include: 'source.mermaid#comma'}
      ]
    },
    relation: {
      begin:
        '(?x)\n# First operand\n(?:\n\t((?=[a-zA-Z])\\w+)  # Name\n\t(?:\\s+("[^"]*"))?  # Cardinality\n\t\\s*\n)?\n\n# Link operator\n(?:\n\t# (Possibly asymmetrical) two-way relation\n\t((?:[*o]|<\\|?)(?:--|\\.\\.)(?:[*o]|\\|?>))\n\t\n\t# One-way relations\n\t| (--\\|>     | <\\|--)      # Inheritance\n\t| (--\\*      | \\*--)       # Composition\n\t| (--o        | o--)         # Aggregation\n\t| (-->        | <--)         # Association\n\t| (\\.{2}\\|> | <\\|\\.{2})  # Realisation\n\t| (\\.{2}>    | <\\.{2})     # Dependency\n\t| (\\.{2})                   # Link, dashed\n\t| (--)                       # Link, solid\n)\n\n# Second operand\n(?:\n\t\\s*\n\t(?:("[^"]*")\\s+)?  # Cardinality\n\t((?=[a-zA-Z])\\w+)  # Name\n)?',
      beginCaptures: {
        1: {name: 'entity.name.type.class.first.mermaid'},
        10: {name: 'keyword.operator.relation.dependency.mermaid'},
        11: {name: 'keyword.operator.relation.link.dashed.mermaid'},
        12: {patterns: [{include: '#cardinality'}]},
        13: {name: 'entity.name.type.class.second.mermaid'},
        2: {patterns: [{include: '#cardinality'}]},
        3: {name: 'keyword.operator.relation.two-way.mermaid'},
        4: {name: 'keyword.operator.relation.inheritance.mermaid'},
        5: {name: 'keyword.operator.relation.composition.mermaid'},
        6: {name: 'keyword.operator.relation.aggregation.mermaid'},
        7: {name: 'keyword.operator.relation.association.mermaid'},
        8: {name: 'keyword.operator.relation.link.solid.mermaid'},
        9: {name: 'keyword.operator.relation.realisation.mermaid'}
      },
      end: '(?!\\G)',
      name: 'meta.relation.mermaid',
      patterns: [
        {
          begin: '\\G\\s*(:)[ \\t]*',
          beginCaptures: {1: {patterns: [{include: 'source.mermaid#colon'}]}},
          contentName: 'string.unquoted.relation-text.mermaid',
          end: '(?=\\s*$)',
          name: 'meta.label.mermaid'
        }
      ]
    },
    visibility: {
      patterns: [
        {
          captures: {0: {name: 'sublimelinter.gutter-mark'}},
          match: '\\+',
          name: 'storage.modifier.visibility.public.mermaid'
        },
        {
          captures: {0: {name: 'sublimelinter.gutter-mark'}},
          match: '-',
          name: 'storage.modifier.visibility.private.mermaid'
        },
        {
          captures: {0: {name: 'sublimelinter.gutter-mark'}},
          match: '#',
          name: 'storage.modifier.visibility.protected.mermaid'
        },
        {
          captures: {0: {name: 'sublimelinter.gutter-mark'}},
          match: '~',
          name: 'storage.modifier.visibility.internal.mermaid'
        }
      ]
    }
  },
  scopeName: 'source.mermaid.class-diagram'
}

export default grammar
