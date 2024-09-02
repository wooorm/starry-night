// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-etc>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['etc'],
  extensions: ['.tsv', '.vcf'],
  names: ['tsv', 'tab-seperated-values'],
  patterns: [
    {
      begin:
        '\\A(#)((--)(?:(?:Mosaic|Netscape) Communications Corporation|MCOM) MIME Information)$',
      beginCaptures: {
        1: {name: 'punctuation.definition.comment.directive.generic-db'},
        2: {name: 'storage.type.class.directive.generic-db'},
        3: {name: 'punctuation.definition.block.tag.generic-db'}
      },
      end: '(?=A)B',
      name: 'meta.mime-types.netscape-format.generic-db',
      patterns: [{include: 'etc#comment'}, {include: '#netscape-mime-type'}]
    },
    {include: '#main'}
  ],
  repository: {
    field: {
      match: '(?:[^#:\\s]|(?<=\\t|:)#)[^:\\r\\n\\t]*',
      name: 'constant.other.field.generic-db'
    },
    main: {patterns: [{include: 'etc#comment'}, {include: '#record'}]},
    'netscape-mime-type': {
      applyEndPatternLast: true,
      begin: '^(?=\\s*[^#\\s])',
      end: '$',
      name: 'meta.definition.mime-type.netscape-format.generic-db',
      patterns: [
        {
          begin: '\\\\$(?:\\r?\\n)?',
          beginCaptures: {
            0: {name: 'punctuation.definition.escape.generic-db'}
          },
          end: '^',
          name: 'keyword.operator.line-continuation.generic-db'
        },
        {
          begin: '(?:^|\\G|(?<=\\s))(exts)(=)',
          beginCaptures: {
            1: {name: 'variable.assignment.generic-db'},
            2: {patterns: [{include: 'etc#eql'}]}
          },
          contentName: 'meta.extensions-list.generic-db',
          end: '(?!\\G)',
          name: 'meta.assignment.extensions-field.generic-db',
          patterns: [
            {
              begin: '\\G"',
              beginCaptures: {
                0: {name: 'punctuation.definition.string.begin.generic-db'}
              },
              end: '"',
              endCaptures: {
                0: {name: 'punctuation.definition.string.end.generic-db'}
              },
              patterns: [
                {
                  match: '[^"\\s,]+',
                  name: 'string.quoted.double.file-extension.generic-db'
                },
                {include: 'etc#comma'}
              ]
            },
            {
              captures: {
                1: {
                  patterns: [
                    {
                      match: '[^,]+',
                      name: 'string.unquoted.file-extension.generic-db'
                    },
                    {include: 'etc#comma'}
                  ]
                }
              },
              match: '\\G(?!")(\\S+)'
            }
          ]
        },
        {
          begin: '(?:^|\\G|(?<=\\s))(enc)(=)',
          beginCaptures: {
            1: {name: 'variable.assignment.generic-db'},
            2: {patterns: [{include: 'etc#eql'}]}
          },
          end: '(?!\\G)',
          name: 'meta.assignment.content-encoding.generic-db',
          patterns: [
            {
              begin: '\\G"',
              beginCaptures: {
                0: {name: 'punctuation.definition.string.begin.generic-db'}
              },
              contentName: 'entity.other.encoding.generic-db',
              end: '"',
              endCaptures: {
                0: {name: 'punctuation.definition.string.end.generic-db'}
              },
              name: 'string.quoted.double.generic-db'
            },
            {match: '\\G[^\\s]+', name: 'entity.other.encoding.generic-db'}
          ]
        },
        {
          begin: '(?:^|\\G|(?<=\\s))(type|desc|icon)(=)',
          beginCaptures: {
            1: {name: 'variable.assignment.generic-db'},
            2: {patterns: [{include: 'etc#eql'}]}
          },
          end: '(?!\\G)',
          name: 'meta.assignment.${1:/downcase}-field.generic-db',
          patterns: [
            {include: 'etc#mime'},
            {
              match: '\\G(?!")[^\\s]+',
              name: 'string.unquoted.field.generic-db'
            },
            {
              begin: '\\G"',
              beginCaptures: {
                0: {name: 'punctuation.definition.string.begin.generic-db'}
              },
              end: '"',
              endCaptures: {
                0: {name: 'punctuation.definition.string.end.generic-db'}
              },
              name: 'string.quoted.double.field.generic-db',
              patterns: [{include: 'etc#mime'}]
            }
          ]
        }
      ]
    },
    record: {
      begin: '^(?=\\s*[^#:\\s])',
      end: '$',
      name: 'meta.record.generic-db',
      patterns: [
        {include: 'etc#mime'},
        {include: 'etc#colon'},
        {include: 'etc#tab'},
        {include: '#field'}
      ]
    }
  },
  scopeName: 'source.generic-db'
}

export default grammar
