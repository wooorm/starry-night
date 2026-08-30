// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/kaypes/blueprint-grammar>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.blp'],
  names: ['blueprint', 'blp'],
  patterns: [
    {include: '#comment'},
    {include: '#using-statement'},
    {include: '#translation-function'},
    {include: '#function'},
    {include: '#property-declaration'},
    {include: '#property-block'},
    {include: '#binding'},
    {include: '#signal'},
    {include: '#class-with-id'},
    {include: '#menu-with-id'},
    {include: '#superclass-name'},
    {include: '#qualifier'},
    {include: '#string'},
    {include: '#numeric-value'},
    {include: '#class-name'},
    {include: '#keyword'},
    {include: '#property-value'},
    {include: '#blocks'},
    {include: '#terminator'}
  ],
  repository: {
    binding: {
      captures: {
        1: {name: 'keyword.control.bind.blueprint'},
        2: {name: 'entity.other.attribute-name.id.blueprint'},
        3: {name: 'punctuation.accessor.blueprint'},
        4: {name: 'variable.other.property.blueprint'}
      },
      match: '\\b(bind)\\s+([-\\w]+)\\s*(\\.)\\s*([-\\w]+)',
      name: 'meta.binding.blueprint'
    },
    'block-comment': {
      begin: '/\\*',
      captures: {0: {name: 'punctuation.definition.comment.blueprint'}},
      end: '\\*/',
      name: 'comment.block.blueprint'
    },
    blocks: {
      patterns: [
        {include: '#property-block-begin'},
        {include: '#property-block-end'}
      ]
    },
    'class-name': {
      match: '\\b\\.?[A-Z][\\w\\.]*',
      name: 'entity.name.class.blueprint'
    },
    'class-with-id': {
      captures: {
        1: {name: 'entity.name.class.blueprint'},
        2: {name: 'entity.other.attribute-name.id.blueprint'}
      },
      match: '\\b(\\.?[A-Z][\\w\\.]*)\\s+([-\\da-z][-\\w]*)',
      name: 'meta.class.identified.blueprint'
    },
    comment: {
      patterns: [{include: '#line-comment'}, {include: '#block-comment'}]
    },
    function: {
      begin: '\\b([a-zA-Z_]\\w*)\\s*(\\()',
      beginCaptures: {
        1: {name: 'entity.name.function.blueprint'},
        2: {name: 'punctuation.section.function.begin.blueprint'}
      },
      end: '\\)',
      endCaptures: {0: {name: 'punctuation.section.function.end.blueprint'}},
      name: 'meta.function.blueprint',
      patterns: [
        {include: '#function'},
        {include: '#string'},
        {include: '#numeric-value'},
        {
          match: '\\b[-\\d_a-z][-\\w]*\\b',
          name: 'entity.other.attribute-name.id.blueprint'
        },
        {match: ',', name: 'punctuation.separator.comma.blueprint'}
      ]
    },
    keyword: {
      patterns: [{include: '#keyword-control'}, {include: '#keyword-operator'}]
    },
    'keyword-control': {
      match:
        '\\b(using|template|menu|submenu|section|item|bind|bind-property|typeof|as|accessibility)\\b',
      name: 'keyword.control.blueprint'
    },
    'keyword-operator': {match: '(=>)', name: 'keyword.operator.blueprint'},
    'line-comment': {
      match: '//.*$',
      name: 'comment.line.double-slash.blueprint'
    },
    literals: {
      patterns: [
        {include: '#numeric-value'},
        {include: '#string'},
        {include: '#property-value'}
      ]
    },
    'menu-with-id': {
      captures: {
        1: {name: 'keyword.control.menu.blueprint'},
        2: {name: 'entity.other.attribute-name.id.blueprint'}
      },
      match: '\\b(menu|submenu|section|item)\\s+([-\\da-z][-\\w]*)\\s*(?=\\{)',
      name: 'meta.menu.identified.blueprint'
    },
    'numeric-value': {
      match: '-?\\d+(\\.\\d+)?',
      name: 'constant.numeric.blueprint'
    },
    'property-block': {
      captures: {1: {name: 'support.type.property-name.blueprint'}},
      match: '\\b([-\\da-z]+)\\s*(?=\\[|\\{)',
      name: 'meta.property-block.blueprint'
    },
    'property-block-begin': {
      match: '\\[|\\{',
      name: 'punctuation.section.property-list.begin.blueprint'
    },
    'property-block-end': {
      match: '\\]|\\}',
      name: 'punctuation.section.property-list.end.blueprint'
    },
    'property-declaration': {
      captures: {
        1: {name: 'support.type.property-name.blueprint'},
        2: {name: 'punctuation.separator.key-value.blueprint'}
      },
      match: '\\b([-\\da-z]+)\\s*(:|=)',
      name: 'meta.property-declaration.blueprint'
    },
    'property-value': {
      match: '\\b[-\\d_a-z][-\\w]*\\b',
      name: 'constant.language.blueprint'
    },
    qualifier: {
      begin: '(\\[)\\s*([-\\w]+)\\b',
      beginCaptures: {
        1: {name: 'punctuation.section.qualifier.begin.blueprint'},
        2: {name: 'support.type.property-name.blueprint'}
      },
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.section.qualifier.end.blueprint'}},
      name: 'meta.qualifier.blueprint',
      patterns: [
        {include: '#comment'},
        {include: '#property-declaration'},
        {include: '#literals'}
      ]
    },
    signal: {
      captures: {
        1: {name: 'support.type.property-name.blueprint'},
        2: {name: 'keyword.operator.assignment.signal.blueprint'}
      },
      match: '\\b([-\\da-z]+)\\s*(=>)',
      name: 'meta.signal.blueprint'
    },
    string: {
      patterns: [{include: '#string-single'}, {include: '#string-double'}]
    },
    'string-double': {
      begin: '"',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.blueprint'}
      },
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.blueprint'}},
      name: 'string.quoted.double.blueprint',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.blueprint'}]
    },
    'string-single': {
      begin: "'",
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.blueprint'}
      },
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.blueprint'}},
      name: 'string.quoted.single.blueprint',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.blueprint'}]
    },
    'superclass-name': {
      captures: {
        1: {name: 'keyword.control.operator.inherited-class.blueprint'},
        2: {name: 'entity.other.inherited-class.blueprint'}
      },
      match: '(:)\\s*(\\.?[A-Z][\\w\\.]*)',
      name: 'meta.inherited-class.blueprint'
    },
    terminator: {
      match: ';',
      name: 'punctuation.terminator.expression.blueprint'
    },
    'translation-function': {
      captures: {1: {name: 'entity.name.function.translation.blueprint'}},
      match: '\\b(_)\\s*(?=\\()',
      name: 'meta.function.translation.blueprint'
    },
    'using-statement': {
      captures: {
        1: {name: 'keyword.control.import.blueprint'},
        2: {name: 'entity.name.class.blueprint'},
        3: {name: 'constant.numeric.blueprint'},
        4: {name: 'punctuation.terminator.expression.blueprint'}
      },
      match: '\\b(using)\\s+([\\w\\.]+)\\s+([\\d\\.]+)(;|$)',
      name: 'meta.import.blueprint'
    }
  },
  scopeName: 'source.blueprint'
}

export default grammar
