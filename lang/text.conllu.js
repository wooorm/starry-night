// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.conllu', '.conll'],
  names: ['conll-u', 'conll', 'conll-x'],
  patterns: [
    {match: '^# .+$', name: 'comment.line.number-sign.conllu'},
    {
      captures: {
        1: {name: 'constant.numeric.id.conllu'},
        10: {name: 'entity.name.section.misc.conllu'},
        2: {name: 'storage.type.form.conllu'},
        3: {name: 'entity.name.section.lemma.conllu'},
        4: {name: 'constant.language.upostag.conllu'},
        5: {name: 'entity.name.section.xpostag.conllu'},
        6: {name: 'markup.list.unnumbered.feats.conllu'},
        7: {name: 'constant.numeric.head.conllu'},
        8: {name: 'keyword.control.deprel.conllu'},
        9: {name: 'markup.list.numbered.deps.conllu'}
      },
      match:
        '^([^\t]+)\t([^\t]+)\t([^\t]+)\t([^\t]+)\t([^\t]+)\t([^\t]+)\t([^\t]+)\t([^\t]+)\t([^\t]+)\t([^\t]+)$',
      name: 'entity.name.section.token.conllu'
    }
  ],
  scopeName: 'text.conllu'
}

export default grammar
