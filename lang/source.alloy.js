// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/macekond/Alloy.tmbundle>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.als'],
  names: ['alloy'],
  patterns: [
    {match: '\\b(run|check)\\b', name: 'keyword.control.alloy'},
    {match: "\\b(implies|or|and|not|'|;)\\b", name: 'keyword.operator.alloy'},
    {
      match:
        '\\b(abstract|after|all|always|and|as|assert|before|but|check|disj|else|eventually|exactly|extends|fact|for|fun|historically|iden|iff|implies|in|Int|let|lone|module|no|none|once|one|open|or|pred|releases|run|set|sig|since|some|steps|sum|triggered|univ|until|var)\\b',
      name: 'keyword.other.alloy'
    },
    {match: '\\/\\/.*', name: 'comment.line.double-slash.alloy'},
    {
      match: '\\/\\*(.)*\\*\\/|\\s\\*\\s(.)*\\n|\\*/|\\/\\*(.)*',
      name: 'comment.block.empty.alloy'
    },
    {
      match: '\\b(fact|sig|module|pred|fun|enum)\\b',
      name: 'storage.type.alloy'
    },
    {
      begin: 'pred \\w*\\[(.)*]{',
      end: '}',
      name: 'entity.name.function.predicate.alloy',
      patterns: [{include: '$self'}]
    }
  ],
  scopeName: 'source.alloy'
}

export default grammar
