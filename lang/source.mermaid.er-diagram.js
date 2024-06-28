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
    attribute: {
      captures: {
        1: {name: 'storage.type.attribute.mermaid'},
        2: {name: 'entity.name.attribute.mermaid'},
        3: {name: 'constant.language.other.key-type.mermaid'},
        4: {patterns: [{include: '#string'}]}
      },
      match:
        '(?x)\n((?=[a-zA-Z])[-\\w]+) # Attribute type\n\\s+\n((?=[a-zA-Z])[-\\w]+) # Attribute name\n(?:\\s+ (PK|FK))?     # Primary/foreign key\n(?:\\s* ("[^"]*"))?   # Comment',
      name: 'meta.attribute.mermaid'
    },
    attributes: {
      begin: '((?=[a-zA-Z])[-\\w]+)\\s*({)',
      beginCaptures: {
        1: {name: 'entity.name.assignee.mermaid'},
        2: {patterns: [{include: 'source.mermaid#brace'}]}
      },
      end: '}',
      endCaptures: {0: {patterns: [{include: 'source.mermaid#brace'}]}},
      name: 'meta.attributes.mermaid',
      patterns: [
        {include: '#attribute'},
        {include: 'source.mermaid#a11y'},
        {include: 'source.mermaid#directive'},
        {include: 'source.mermaid#comment'}
      ]
    },
    main: {
      patterns: [
        {include: 'source.mermaid#a11y'},
        {include: 'source.mermaid#directive'},
        {include: 'source.mermaid#comment'},
        {include: '#attributes'},
        {include: '#relationship'}
      ]
    },
    relationship: {
      captures: {
        1: {name: 'entity.name.operand.first.mermaid'},
        2: {name: 'keyword.operator.cardinality.mermaid'},
        3: {name: 'entity.name.operand.second.mermaid'},
        4: {patterns: [{include: 'source.mermaid#colon'}]},
        5: {patterns: [{include: '#string'}]},
        6: {name: 'string.unquoted.label-text.mermaid'},
        7: {name: 'invalid.illegal.unexpected-characters.mermaid'}
      },
      match:
        '(?x)\n((?=[a-zA-Z])[-\\w]+) # Entity 1\n\n(?:\n\t\\s*\n\t# Cardinality configuration thingie\n\t(\n\t\t# Entity 1\'s cardinality\n\t\t(?: \\|o   # Zero or one\n\t\t|   \\|\\| # Exactly one\n\t\t|   }o     # Zero or more\n\t\t|   }\\|   # One or more\n\t\t)\n\t\t\n\t\t# Stroke style\n\t\t(?: --     # Solid\n\t\t| \\.\\.   # Dashed\n\t\t)\n\t\t\n\t\t# Entity 2\'s cardinality\n\t\t(?: o\\|   # Zero or one\n\t\t| \\|\\|   # Exactly one\n\t\t| o{       # Zero or more\n\t\t| \\|{     # One or more\n\t\t)\n\t)\n\t\\s*\n\t((?=[a-zA-Z])[-\\w]+) # Entity 2\n\t\n\t# Relationship label\n\t\\s* (:) \\s*\n\t(?: ("[^"]*")             # Quoted\n\t|   ((?=[a-zA-Z])[-\\w]+) # Unquoted\n\t|   ((?:[^\\s%]|%(?!%))+) # Invalid\n\t)?\n)?',
      name: 'meta.relationship.mermaid'
    },
    string: {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.mermaid'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.mermaid'}},
      name: 'string.quoted.double.label-text.mermaid',
      patterns: [{include: 'source.mermaid#entity'}]
    }
  },
  scopeName: 'source.mermaid.er-diagram'
}

export default grammar
