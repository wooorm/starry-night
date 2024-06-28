// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['text.html.basic'],
  extensions: [],
  names: ['freemarker', 'ftl'],
  patterns: [
    {
      begin: '[<\\[]#--',
      captures: {0: {name: 'punctuation.definition.comment.ftl'}},
      end: '--[>\\]]',
      name: 'comment.block.ftl'
    },
    {
      captures: {
        1: {name: 'punctuation.definition.function.ftl'},
        2: {name: 'punctuation.definition.function.ftl'},
        3: {name: 'entity.name.function.ftl'},
        5: {name: 'variable.parameter.function.ftl'},
        8: {name: 'entity.name.function.ftl'},
        9: {name: 'punctuation.definition.function.ftl'}
      },
      match:
        '([<\\[](#|@))(\\w+(\\.\\w+)*)((\\s+[^>\\]]+)*?)\\s*((\\/)?([>\\]]))',
      name: 'meta.function.ftl'
    },
    {
      captures: {
        1: {name: 'punctuation.definition.function.ftl'},
        2: {name: 'punctuation.definition.function.ftl'},
        3: {name: 'entity.name.function.ftl'},
        5: {name: 'punctuation.definition.function.ftl'}
      },
      match: '([<\\[]\\/(#|@))(\\w+(\\.\\w+)*)\\s*([>\\]])',
      name: 'meta.function.ftl'
    },
    {
      captures: {
        1: {name: 'punctuation.definition.variable.ftl'},
        3: {name: 'entity.name.function.ftl'},
        4: {name: 'punctuation.definition.variable.ftl'}
      },
      match:
        '(\\$\\{)\\.?[a-zA-Z_\\(][\\w\\(\\)+-\\/\\*]+(\\.?[\\w\\(\\)+-\\/\\*]+)*(.*?|\\?\\?|\\!)?(\\})',
      name: 'variable.other.readwrite.local.ftl'
    },
    {include: 'text.html.basic'}
  ],
  scopeName: 'text.html.ftl'
}

export default grammar
