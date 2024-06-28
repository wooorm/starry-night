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
  dependencies: ['source.mermaid'],
  extensions: [],
  names: [],
  patterns: [{include: '#main'}],
  repository: {
    element: {
      begin:
        '(?i)^\\s*(element)(?:\\s+(?:(\\w[^-{<>=]*?)|((")([^"]*)("))))?\\s*({)',
      beginCaptures: {
        1: {name: 'storage.type.element.mermaid'},
        2: {name: 'entity.name.element.mermaid'},
        3: {name: 'string.quoted.double.requirement.name.mermaid'},
        4: {name: 'punctuation.definition.string.begin.mermaid'},
        5: {patterns: [{include: 'source.mermaid#entity'}]},
        6: {name: 'punctuation.definition.string.end.mermaid'},
        7: {patterns: [{include: 'source.mermaid#brace'}]}
      },
      end: '}',
      endCaptures: {0: {patterns: [{include: 'source.mermaid#brace'}]}},
      name: 'meta.element.definition.mermaid',
      patterns: [
        {include: '#field'},
        {include: 'source.mermaid#a11y'},
        {include: 'source.mermaid#directive'},
        {include: 'source.mermaid#comment'}
      ]
    },
    field: {
      begin: '(?i)^\\s*(\\w+)\\s*(:)[ \\t]*',
      beginCaptures: {
        1: {name: 'variable.assignment.field.mermaid'},
        2: {patterns: [{include: 'source.mermaid#colon'}]}
      },
      end: '(?=\\s*$)',
      name: 'meta.field.${1:/downcase}.mermaid',
      patterns: [{include: '#field-innards'}]
    },
    'field-innards': {
      patterns: [
        {
          begin: '\\G\\s*"',
          beginCaptures: {
            1: {name: 'punctuation.definition.string.begin.mermaid'}
          },
          contentName: 'string.quoted.double.mermaid',
          end: '(")(?:\\s*(?!%%)(\\S[^\\r\\n]*))?',
          endCaptures: {
            1: {name: 'punctuation.definition.string.end.mermaid'},
            2: {name: 'invalid.illegal.unexpected-junk.mermaid'}
          },
          patterns: [{include: 'source.mermaid#entity'}]
        },
        {match: '\\G[^"\\s][^"\\r\\n]*', name: 'string.unquoted.mermaid'}
      ]
    },
    'invalid-value': {
      match: '\\G\\S[^\\r\\n]*',
      name: 'invalid.illegal.bad-value.mermaid'
    },
    main: {
      patterns: [
        {include: 'source.mermaid#a11y'},
        {include: 'source.mermaid#directive'},
        {include: 'source.mermaid#comment'},
        {include: '#requirement'},
        {include: '#element'},
        {include: '#relationship'}
      ]
    },
    relationship: {
      patterns: [
        {
          captures: {
            1: {patterns: [{include: '#relationship-source'}]},
            2: {patterns: [{include: '#relationship-type'}]},
            3: {patterns: [{include: '#relationship-destination'}]}
          },
          match:
            '(?x)\n(\\w[^-{<>=\\r\\n]* | "[^"]*")  \\s* # Source\n(- \\s* \\w+ \\s* ->)           \\s* # Operator\n(\\w[^-{<>=\\r\\n]* | "[^"]*")       # Destination',
          name: 'meta.relationship.source-to-destination.mermaid'
        },
        {
          captures: {
            1: {patterns: [{include: '#relationship-destination'}]},
            2: {patterns: [{include: '#relationship-type'}]},
            3: {patterns: [{include: '#relationship-source'}]}
          },
          match:
            '(?x)\n(\\w[^-{<>=\\r\\n]* | "[^"]*")  \\s* # Destination\n(<- \\s* \\w+ \\s* -)           \\s* # Operator\n(\\w[^-{<>=\\r\\n]* | "[^"]*")       # Source',
          name: 'meta.relationship.destination-to-source.mermaid'
        }
      ]
    },
    'relationship-destination': {
      patterns: [
        {
          begin: '(?:^|\\G)"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.mermaid'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.mermaid'}},
          name: 'string.quoted.double.relationship-operand.destination.mermaid',
          patterns: [{include: 'source.mermaid#entity'}]
        },
        {
          match: '(?:^|\\G)\\w.*',
          name: 'entity.name.relationship-operand.destination.mermaid'
        }
      ]
    },
    'relationship-source': {
      patterns: [
        {
          begin: '(?:^|\\G)"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.mermaid'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.mermaid'}},
          name: 'string.quoted.double.relationship-operand.source.mermaid',
          patterns: [{include: 'source.mermaid#entity'}]
        },
        {
          match: '(?:^|\\G)\\w.*',
          name: 'entity.name.relationship-operand.source.mermaid'
        }
      ]
    },
    'relationship-type': {
      patterns: [
        {match: '->', name: 'keyword.operator.arrow.left.mermaid'},
        {match: '<-', name: 'keyword.operator.arrow.right.mermaid'},
        {match: '-', name: 'keyword.operator.dash.mermaid'},
        {
          match:
            '(?ix)\n(?:^|\\G|(?<=-|\\s))\n( contains\n| copies\n| derives\n| refines\n| satisfies\n| traces\n| verifies\n) (?=$|-|\\s)',
          name: 'keyword.operator.relation.${1:/downcase}.mermaid'
        },
        {match: '\\w+', name: 'invalid.illegal.unsupported-type.mermaid'}
      ]
    },
    requirement: {
      begin:
        '(?xi) ^\\s*\n( functionalRequirement\n| interfaceRequirement\n| performanceRequirement\n| physicalRequirement\n| designConstraint\n| requirement\n)\n(?:\n\t\\s+\n\t# Requirement name\n\t(?: (\\w[^-{<>=]*?) # Unquoted\n\t|   ((")([^"]*)(")) # Quoted\n\t)\n)?\n\\s* ({)',
      beginCaptures: {
        1: {name: 'storage.type.requirement.mermaid'},
        2: {name: 'entity.name.requirement.mermaid'},
        3: {name: 'string.quoted.double.requirement.name.mermaid'},
        4: {name: 'punctuation.definition.string.begin.mermaid'},
        5: {patterns: [{include: 'source.mermaid#entity'}]},
        6: {name: 'punctuation.definition.string.end.mermaid'},
        7: {patterns: [{include: 'source.mermaid#brace'}]}
      },
      end: '}',
      endCaptures: {0: {patterns: [{include: 'source.mermaid#brace'}]}},
      name: 'meta.requirement.definition.mermaid',
      patterns: [
        {include: '#risk'},
        {include: '#verify-method'},
        {include: '#field'},
        {include: 'source.mermaid#a11y'},
        {include: 'source.mermaid#directive'},
        {include: 'source.mermaid#comment'}
      ]
    },
    risk: {
      begin: '(?i)^\\s*(risk)\\s*(:)[ \\t]*',
      beginCaptures: {
        1: {name: 'variable.assignment.field.mermaid'},
        2: {patterns: [{include: 'source.mermaid#colon'}]}
      },
      end: '(?=\\s*$)',
      name: 'meta.field.risk.mermaid',
      patterns: [
        {
          match: '(?i)\\G(Low|Medium|High)(?=\\s*$)',
          name: 'constant.language.risk-level.${1:/downcase}.mermaid'
        },
        {include: '#invalid-value'}
      ]
    },
    'verify-method': {
      begin: '(?i)^\\s*(verifyMethod)\\s*(:)[ \\t]*',
      beginCaptures: {
        1: {name: 'variable.assignment.field.mermaid'},
        2: {patterns: [{include: 'source.mermaid#colon'}]}
      },
      end: '(?=\\s*$)',
      name: 'meta.field.verify-method.mermaid',
      patterns: [
        {
          match: '(?i)\\G(Analysis|Demonstration|Inspection|Test)(?=\\s*$)',
          name: 'constant.language.verify-method.${1:/downcase}.mermaid'
        },
        {include: '#invalid-value'}
      ]
    }
  },
  scopeName: 'source.mermaid.requirement-diagram'
}

export default grammar
