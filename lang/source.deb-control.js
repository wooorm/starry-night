// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/tsbarnes/language-debian>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.dsc'],
  names: ['debian-package-control-file'],
  patterns: [{include: '#paragraphs'}],
  repository: {
    comments: {match: '^#.*$', name: 'comment.line.deb-control'},
    fields: {
      patterns: [
        {
          begin:
            '^(Package|Version|Architecture|Maintainer|Source|Section|Priority|Essential|Installed-Size|Homepage|Built-Using|Standards-Version)(:)',
          beginCaptures: {
            1: {name: 'entity.name.section.field.simple.deb-control'},
            2: {name: 'keyword.operator.deb-control'}
          },
          end: '\\n',
          name: 'meta.section.field.simple.deb-control',
          patterns: [{include: '#variables'}]
        },
        {
          begin: '^(Depends|Build-Depends)(:)',
          beginCaptures: {
            1: {name: 'entity.name.section.field.folded.deb-control'},
            2: {name: 'keyword.operator.deb-control'}
          },
          end: '^(?!\\s)',
          name: 'meta.section.field.folded.deb-control',
          patterns: [{include: '#comments'}, {include: '#variables'}]
        },
        {
          begin: '^(Description)(:)',
          beginCaptures: {
            1: {name: 'entity.name.section.field.multiline.deb-control'},
            2: {name: 'keyword.operator.deb-control'}
          },
          end: '^(?!\\s)',
          name: 'meta.section.field.multiline.deb-control',
          patterns: [{include: '#comments'}, {include: '#variables'}]
        },
        {
          begin: '^([^:\\s]*)(:)',
          beginCaptures: {
            1: {
              patterns: [
                {
                  captures: {
                    1: {name: 'entity.name.section.field.unknown.deb-control'},
                    2: {name: 'keyword.operator.deb-control'}
                  },
                  match: '^([a-zA-Z0-9][a-zA-Z0-9\\-]*)'
                },
                {
                  captures: {
                    1: {name: 'invalid.illegal.name.section.field.deb-control'},
                    2: {name: 'keyword.operator.deb-control'}
                  },
                  match: '^([^a-zA-Z0-9].*)'
                },
                {
                  captures: {
                    1: {name: 'invalid.illegal.name.section.field.deb-control'},
                    2: {name: 'keyword.operator.deb-control'}
                  },
                  match: '^([a-zA-Z0-9].*[^a-zA-Z0-9\\-]*.*)'
                }
              ]
            },
            2: {name: 'keyword.operator.deb-control'}
          },
          end: '^(?!\\s)',
          name: 'meta.section.field.multiline.deb-control',
          patterns: [{include: '#comments'}, {include: '#variables'}]
        }
      ]
    },
    paragraphs: {
      patterns: [
        {
          begin: '^(?!\\s)',
          end: '^$',
          name: 'meta.section.paragraph.deb-control',
          patterns: [{include: '#comments'}, {include: '#fields'}]
        }
      ]
    },
    variables: {
      patterns: [
        {
          begin: '\\${',
          end: '}',
          name: 'variable.other.substitution.deb-control'
        }
      ]
    }
  },
  scopeName: 'source.deb-control'
}

export default grammar
