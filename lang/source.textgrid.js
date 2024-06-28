// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/orhunulusahin/praatvscode>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.textgrid'],
  names: ['textgrid'],
  patterns: [
    {
      match:
        '((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)',
      name: 'constant.numeric.textgrid'
    },
    {
      begin: '"',
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.textgrid'}
      },
      contentName: 'meta.string-contents.quoted.double.textgrid',
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.textgrid'}},
      name: 'string.quoted.double.textgrid'
    },
    {
      match: '(x(min|max)|class|name|text|size)',
      name: 'constant.language.textgrid'
    },
    {match: '(intervals|item)', name: 'entity.name.type.module.textgrid'},
    {
      match: '(File type|Object class|\\<exists\\>)',
      name: 'keyword.control.language.textgrid'
    },
    {match: '=', name: 'keyword.operator.key.textgrid'},
    {
      captures: {
        0: {name: 'constant.language.textgrid'},
        1: {name: 'entity.name.type.module.textgrid'}
      },
      match: 'tiers(\\?)'
    }
  ],
  scopeName: 'source.textgrid'
}

export default grammar
