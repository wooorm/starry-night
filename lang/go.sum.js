// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/golang/vscode-go>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: ['go-checksums', 'go.sum', 'go-sum', 'go.work.sum', 'go-work-sum'],
  patterns: [
    {include: '#checksum'},
    {include: '#semver'},
    {include: '#unquoted_string'}
  ],
  repository: {
    checksum: {
      captures: {
        1: {
          patterns: [
            {match: '[a-zA-Z\\d+\\/]{43}', name: 'string.unquoted.go.sum'},
            {match: '.*', name: 'invalid.illegal.unknown-hash.go.sum'}
          ]
        }
      },
      match: 'h1:([^\\s]+)='
    },
    semver: {
      match:
        'v(?:0|[1-9]\\d*)\\.(?:0|[1-9]\\d*)\\.(?:0|[1-9]\\d*)(?:-[\\da-z-]+(?:\\.[\\da-z-]+)*)?(?:\\+[\\da-z-]+(?:\\.[\\da-z-]+)*)?',
      name: 'constant.language.go.sum'
    },
    unquoted_string: {match: '[^\\s]+', name: 'string.unquoted.go.sum'}
  },
  scopeName: 'go.sum'
}

export default grammar
