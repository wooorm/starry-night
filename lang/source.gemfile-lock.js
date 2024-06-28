// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/hmarr/gemfile-lock-tmlanguage>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['gemfile.lock'],
  patterns: [{include: '#dependencies-sections'}, {include: '#other-sections'}],
  repository: {
    'dependencies-sections': {
      begin: '^(GEM|PATH|GIT|DEPENDENCIES)$',
      beginCaptures: {0: {name: 'keyword.control.section.gemfile-lock'}},
      end: '^$',
      name: 'section.gemfile-lock',
      patterns: [{include: '#entries'}, {include: '#dependency-specs'}]
    },
    'dependency-specs': {
      patterns: [
        {
          begin: '^ {2,6}([^ !]+)\\s*(\\()?',
          beginCaptures: {
            1: {name: 'entity.package.gemfile-lock'},
            2: {name: 'punctuation.parenthesis.begin.gemfile-lock'}
          },
          end: '($|\\))',
          endCaptures: {1: {name: 'punctuation.parenthesis.end.gemfile-lock'}},
          name: 'dependency.gemfile-lock',
          patterns: [{include: '#versions'}]
        }
      ]
    },
    entries: {
      patterns: [
        {
          captures: {
            1: {name: 'meta.property-name.gemfile-lock'},
            2: {name: 'string.gemfile-lock'}
          },
          match: '^ +([a-z]+:) ?(.*)$',
          name: 'entry.gemfile-lock'
        }
      ]
    },
    'other-sections': {
      begin: '^[A-Z ]+$',
      beginCaptures: {0: {name: 'keyword.control.section.gemfile-lock'}},
      end: '^$',
      name: 'section.gemfile-lock',
      patterns: [
        {captures: {1: {name: 'string.gemfile-lock'}}, match: '^\\s+(.*)$'}
      ]
    },
    versions: {
      patterns: [
        {
          captures: {
            1: {name: 'keyword.operator.comparison.gemfile-lock'},
            2: {name: 'constant.numeric.gemfile-lock'},
            3: {name: 'punctuation.separator.gemfile-lock'}
          },
          match: '(?:(<=|>=|=|~>|<|>|!=) )?([0-9A-Za-z_\\-\\.]+)(,)?',
          name: 'version.gemfile-lock'
        }
      ]
    }
  },
  scopeName: 'source.gemfile-lock'
}

export default grammar
