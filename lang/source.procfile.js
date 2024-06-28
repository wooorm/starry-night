// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/benspaulding/vscode-procfile>
// and licensed `bsd-3-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.shell'],
  extensions: [],
  names: ['procfile'],
  patterns: [{include: '#process'}, {include: '#ignored'}],
  repository: {
    ignored: {match: '^(?![\\w-]+:).*$', name: 'comment.line.procfile'},
    process: {
      begin: '^(?=[\\w-]+:)',
      contentName: 'meta.function.procfile',
      end: '$',
      patterns: [
        {
          begin: '^(?=[\\w-]+:)',
          contentName: 'support.function.procfile',
          end: '(?<=:)',
          patterns: [
            {match: '^(web|release)(?=:)', name: 'keyword.heroku.procfile'},
            {match: '^[\\w-]+(?=:)', name: 'entity.name.function.procfile'},
            {
              match: '(?<=[\\w-]):',
              name: 'punctuation.separator.colon.procfile'
            }
          ]
        },
        {
          begin: '(?<=[\\w-]:)',
          end: '$',
          name: 'meta.embedded.line.shell',
          patterns: [{include: 'source.shell'}]
        }
      ]
    }
  },
  scopeName: 'source.procfile'
}

export default grammar
