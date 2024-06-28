// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/sixty4k/st2-zonefile>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.zone', '.arpa'],
  names: ['dns-zone'],
  patterns: [
    {match: ';.*', name: 'comment.line.semicolon.zone_file'},
    {match: '@', name: 'keyword.directive.zone_file'},
    {
      captures: {
        2: {name: 'variable.other.directive.zone_file'},
        3: {name: 'comment.line.semicolon.zone_file'}
      },
      match: '\\$(ORIGIN|origin|TTL|ttl|INCLUDE|include)\\s*([^;]*)(;.*)?',
      name: 'keyword.directive.zone_file'
    },
    {
      match: '\\d+(H|h|D|d|W|w|M|m|Y|y)',
      name: 'variable.other.timeunit.zone_file'
    },
    {
      begin:
        '([A-Za-z0-9_.-]*)\\s+(?:([0-9A-Za-z]*)\\s+)?([I|i][N|n]\\s+[A-Za-z0-9]+)\\s+(.*)\\(',
      beginCaptures: {
        2: {name: 'variable.other.timeunit.zone_file'},
        3: {name: 'keyword.resourcetype.zone_file'},
        4: {name: 'string.quoted.single.resource.address.zone_file'}
      },
      end: '\\)',
      name: 'string.quoted.single.address.zone_file',
      patterns: [{match: ';.*', name: 'comment.line.semicolon.zone_file'}]
    },
    {
      captures: {
        2: {name: 'variable.other.timeunit.zone_file'},
        3: {name: 'keyword.resourcetype.zone_file'},
        4: {name: 'string.quoted.single.resource.address.zone_file'}
      },
      match:
        '([A-Za-z0-9_.-]*)\\s+(?:([0-9A-Za-z]*)\\s+)?([I|i][N|n]\\s+[A-Za-z0-9]+)\\s+(.*)',
      name: 'string.quoted.single.address.zone_file'
    }
  ],
  scopeName: 'text.zone_file'
}

export default grammar
