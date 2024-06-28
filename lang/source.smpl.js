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
  extensions: ['.cocci'],
  names: ['smpl', 'coccinelle'],
  patterns: [{include: '#main'}],
  repository: {
    comment: {
      patterns: [
        {
          begin: '///',
          beginCaptures: {0: {name: 'punctuation.definition.comment.smpl'}},
          end: '$',
          name: 'comment.line.triple-slash.smpl'
        },
        {
          begin: '//',
          beginCaptures: {0: {name: 'punctuation.definition.comment.smpl'}},
          end: '$',
          name: 'comment.line.double-slash.smpl'
        }
      ]
    },
    control: {
      patterns: [
        {
          match: '<\\+(?=\\.{3})|(?<=\\.{3})\\+>',
          name: 'storage.modifier.required.dots.smpl'
        },
        {
          match: '<(?=\\.{3})|(?<=\\.{3})>',
          name: 'storage.modifier.optional.dots.smpl'
        },
        {match: '\\.{3}', name: 'keyword.control.flow.dots.smpl'}
      ]
    },
    include: {
      captures: {
        1: {name: 'keyword.control.directive.$1.smpl'},
        2: {patterns: [{include: 'etc#str'}]},
        3: {patterns: [{include: '#isoPath'}]}
      },
      match: '^\\s*(include|using)\\s+(?:("[^"]*")|(<.*>))',
      name: 'meta.preprocessor.$1.smpl'
    },
    isoPath: {
      begin: '<',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.smpl'}},
      end: '>',
      endCaptures: {0: {name: 'punctuation.definition.string.end.smpl'}},
      name: 'string.quoted.other.lt-gt.include.smpl'
    },
    lineAdded: {
      captures: {1: {name: 'punctuation.definition.inserted.diff.smpl'}},
      match: '^(\\+).*',
      name: 'markup.inserted.diff.smpl'
    },
    lineDeleted: {
      captures: {1: {name: 'punctuation.definition.deleted.diff.smpl'}},
      match: '^(-).*',
      name: 'markup.deleted.diff.smpl'
    },
    lineMatched: {
      captures: {
        1: {name: 'keyword.operator.semantic-match.diff.smpl'},
        2: {name: 'markup.changed.diff.smpl'}
      },
      match: '^(\\*)\\s*(\\S.*)'
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#include'},
        {include: '#virtual'},
        {include: '#control'},
        {include: '#scripts'},
        {include: '#metavariables'},
        {include: '#variables'},
        {include: '#lineAdded'},
        {include: '#lineDeleted'},
        {include: '#lineMatched'},
        {include: '#when'}
      ]
    },
    metavariables: {
      begin: '^(@).*(@)\\s*$',
      beginCaptures: {
        0: {name: 'meta.diff.range.smpl'},
        1: {name: 'punctuation.definition.range.diff.begin.smpl'},
        2: {name: 'punctuation.definition.range.diff.end.smpl'}
      },
      end: '^(@@)',
      endCaptures: {
        0: {name: 'meta.diff.range.smpl'},
        1: {name: 'punctuation.definition.range.diff.smpl'}
      },
      name: 'meta.diff.header.metavariables.smpl'
    },
    scripts: {
      patterns: [
        {
          begin:
            '(^(@).*?(?<=\\s|@)(script|initialize|finalize):python(?=\\s|@).*?(@)\\s*$)',
          beginCaptures: {
            0: {name: 'meta.diff.header.metavariables.smpl'},
            1: {name: 'meta.diff.range.smpl'},
            2: {name: 'punctuation.definition.range.diff.begin.smpl'},
            3: {name: 'punctuation.definition.range.diff.end.smpl'}
          },
          end: '^(?=@(?!@\\s*$))',
          patterns: [
            {
              begin: '^',
              end: '^(@@)',
              endCaptures: {
                0: {name: 'meta.diff.range.smpl'},
                1: {name: 'punctuation.definition.range.diff.smpl'}
              },
              name: 'meta.diff.header.metavariables.smpl'
            },
            {
              begin: '(?<=@@)\\s*$\\n?',
              contentName: 'source.embedded.python',
              end: '^(?=@)',
              patterns: [{include: '#comment'}, {include: 'source.python'}]
            }
          ]
        },
        {
          begin:
            '(^(@).*?(?<=\\s|@)(script|initialize|finalize):ocaml(?=\\s|@).*?(@)\\s*$)',
          beginCaptures: {
            0: {name: 'meta.diff.header.metavariables.smpl'},
            1: {name: 'meta.diff.range.smpl'},
            2: {name: 'punctuation.definition.range.diff.begin.smpl'},
            3: {name: 'punctuation.definition.range.diff.end.smpl'}
          },
          end: '^(?=@(?!@\\s*$))',
          patterns: [
            {
              begin: '^',
              end: '^(@@)',
              endCaptures: {
                0: {name: 'meta.diff.range.smpl'},
                1: {name: 'punctuation.definition.range.diff.smpl'}
              },
              name: 'meta.diff.header.metavariables.smpl'
            },
            {
              begin: '(?<=@@)\\s*$\\n?',
              contentName: 'source.embedded.ocaml',
              end: '^(?=@)',
              patterns: [{include: '#comment'}, {include: 'source.ocaml'}]
            }
          ]
        }
      ]
    },
    variables: {
      captures: {1: {name: 'keyword.operator.variable.smpl'}},
      match: '(?<!^)(@)[\\w]+',
      name: 'variable.at-prefix.smpl'
    },
    virtual: {
      captures: {
        1: {name: 'storage.modifier.virtual.smpl'},
        2: {
          patterns: [
            {match: '[^\\s,]+', name: 'entity.name.rule.smpl'},
            {include: 'etc#comma'}
          ]
        }
      },
      match: '^\\s*(virtual)\\s+(.*)'
    },
    when: {
      captures: {
        1: {name: 'keyword.control.flow.when.smpl'},
        2: {name: 'keyword.operator.comparison.smpl'}
      },
      match: '(?<=\\s|\\.{3})(when)\\s*(any(?:\\s|$)|!=)'
    }
  },
  scopeName: 'source.smpl'
}

export default grammar
