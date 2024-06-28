// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.rdoc'],
  names: ['rdoc'],
  patterns: [
    {
      captures: {1: {name: 'punctuation.definition.item.text'}},
      match: '^\\s*(•).*$\\n?',
      name: 'meta.bullet-point.strong.text'
    },
    {
      captures: {1: {name: 'punctuation.definition.item.text'}},
      match: '^\\s*(·).*$\\n?',
      name: 'meta.bullet-point.light.text'
    },
    {
      captures: {1: {name: 'punctuation.definition.item.text'}},
      match: '^\\s*(\\*).*$\\n?',
      name: 'meta.bullet-point.star.text'
    },
    {
      begin: '^([ \\t]*)(?=\\S)',
      contentName: 'meta.paragraph.text',
      end: '^(?!\\1(?=\\S))',
      patterns: [
        {
          match:
            '(?x)\n\t\t\t\t\t\t( (https?|s?ftp|ftps|file|smb|afp|nfs|(x-)?man|gopher|txmt)://|mailto:)\n\t\t\t\t\t\t[-:@a-zA-Z0-9_.,~%+/?=&#]+(?<![.,?:])\n\t\t\t\t\t',
          name: 'markup.underline.link.text'
        }
      ]
    }
  ],
  scopeName: 'text.rdoc'
}

export default grammar
