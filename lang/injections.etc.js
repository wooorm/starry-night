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
  extensions: [],
  names: [],
  patterns: [
    {match: '(?<!\\w)@?(PINHACK)\\b', name: 'storage.type.class.${1:/downcase}'}
  ],
  repository: {
    scopeHack: {
      begin: '\\A(?:\\xC2\\xAD|\\xAD){50}',
      end: '(?=A)B',
      patterns: [
        {
          captures: {1: {name: 'constant.other.reference.link'}},
          match: '^ {5}(PRIMER PREVIEW - How grammar scopes look on GitHub):',
          name: 'markup.bold'
        },
        {
          match: '^\\s*Last updated:\\s*(\\d{4}-\\d{2}-\\d{2})$',
          name: 'comment.line'
        },
        {
          captures: {1: {name: 'markup.heading'}},
          match: '^│ +(TEXTMATE.*) +│$',
          name: 'constant.other.reference.link'
        },
        {
          captures: {0: {name: 'constant.other.reference.link'}},
          match: '^│ +│$'
        },
        {
          captures: {1: {name: 'brackethighlighter.angle'}},
          match: '^│\\s+(brackethighlighter.angle\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'brackethighlighter.curly'}},
          match: '^│\\s+(brackethighlighter.curly\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'brackethighlighter.quote'}},
          match: '^│\\s+(brackethighlighter.quote\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'brackethighlighter.round'}},
          match: '^│\\s+(brackethighlighter.round\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'brackethighlighter.square'}},
          match: '^│\\s+(brackethighlighter.square\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'brackethighlighter.tag'}},
          match: '^│\\s+(brackethighlighter.tag\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'brackethighlighter.unmatched'}},
          match: '^│\\s+(brackethighlighter.unmatched\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'carriage-return'}},
          match: '^│\\s+(carriage-return\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'comment'}},
          match: '^│\\s+(comment\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'constant'}},
          match: '^│\\s+(constant\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'constant.character.escape'}},
          match: '^│\\s+(constant.character.escape\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'constant.other.reference.link'}},
          match: '^│\\s+(constant.other.reference.link\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'entity'}},
          match: '^│\\s+(entity\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'entity.name'}},
          match: '^│\\s+(entity.name\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'entity.name.constant'}},
          match: '^│\\s+(entity.name.constant\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'entity.name.tag'}},
          match: '^│\\s+(entity.name.tag\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'invalid.broken'}},
          match: '^│\\s+(invalid.broken\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'invalid.deprecated'}},
          match: '^│\\s+(invalid.deprecated\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'invalid.illegal'}},
          match: '^│\\s+(invalid.illegal\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'invalid.unimplemented'}},
          match: '^│\\s+(invalid.unimplemented\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'keyword'}},
          match: '^│\\s+(keyword\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'keyword.operator.symbole'}},
          match: '^│\\s+(keyword.operator.symbole\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'keyword.other.mark'}},
          match: '^│\\s+(keyword.other.mark\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'markup.bold'}},
          match: '^│\\s+(markup.bold\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'markup.changed'}},
          match: '^│\\s+(markup.changed\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'markup.deleted'}},
          match: '^│\\s+(markup.deleted\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'markup.heading'}},
          match: '^│\\s+(markup.heading\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'markup.ignored'}},
          match: '^│\\s+(markup.ignored\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'markup.inserted'}},
          match: '^│\\s+(markup.inserted\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'markup.italic'}},
          match: '^│\\s+(markup.italic\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'markup.list'}},
          match: '^│\\s+(markup.list\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'markup.quote'}},
          match: '^│\\s+(markup.quote\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'markup.raw'}},
          match: '^│\\s+(markup.raw\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'markup.untracked'}},
          match: '^│\\s+(markup.untracked\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'message.error'}},
          match: '^│\\s+(message.error\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'meta.diff.header'}},
          match: '^│\\s+(meta.diff.header\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'meta.diff.header.from-file'}},
          match: '^│\\s+(meta.diff.header.from-file\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'meta.diff.header.to-file'}},
          match: '^│\\s+(meta.diff.header.to-file\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'meta.diff.range'}},
          match: '^│\\s+(meta.diff.range\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'meta.module-reference'}},
          match: '^│\\s+(meta.module-reference\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'meta.output'}},
          match: '^│\\s+(meta.output\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'meta.property-name'}},
          match: '^│\\s+(meta.property-name\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'meta.separator'}},
          match: '^│\\s+(meta.separator\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'punctuation.definition.changed'}},
          match: '^│\\s+(punctuation.definition.changed\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'punctuation.definition.comment'}},
          match: '^│\\s+(punctuation.definition.comment\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'punctuation.definition.deleted'}},
          match: '^│\\s+(punctuation.definition.deleted\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'punctuation.definition.inserted'}},
          match:
            '^│\\s+(punctuation.definition.inserted\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'punctuation.definition.string'}},
          match: '^│\\s+(punctuation.definition.string\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'punctuation.section.embedded'}},
          match: '^│\\s+(punctuation.section.embedded\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'source'}},
          match: '^│\\s+(source\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'source.regexp'}},
          match: '^│\\s+(source.regexp\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'source.ruby.embedded'}},
          match: '^│\\s+(source.ruby.embedded\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'storage'}},
          match: '^│\\s+(storage\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'storage.modifier.import'}},
          match: '^│\\s+(storage.modifier.import\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'storage.modifier.package'}},
          match: '^│\\s+(storage.modifier.package\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'storage.type'}},
          match: '^│\\s+(storage.type\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'storage.type.java'}},
          match: '^│\\s+(storage.type.java\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'string'}},
          match: '^│\\s+(string\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'string.comment'}},
          match: '^│\\s+(string.comment\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'string.other.link'}},
          match: '^│\\s+(string.other.link\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'string.regexp'}},
          match: '^│\\s+(string.regexp\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'string.regexp.arbitrary-repitition'}},
          match:
            '^│\\s+(string.regexp.arbitrary-repitition\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'string.regexp.character-class'}},
          match: '^│\\s+(string.regexp.character-class\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'string.unquoted.import.ada'}},
          match: '^│\\s+(string.unquoted.import.ada\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'sublimelinter.gutter-mark'}},
          match: '^│\\s+(sublimelinter.gutter-mark\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'sublimelinter.mark.error'}},
          match: '^│\\s+(sublimelinter.mark.error\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'sublimelinter.mark.warning'}},
          match: '^│\\s+(sublimelinter.mark.warning\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'support'}},
          match: '^│\\s+(support\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'support.constant'}},
          match: '^│\\s+(support.constant\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'support.variable'}},
          match: '^│\\s+(support.variable\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'variable'}},
          match: '^│\\s+(variable\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'variable.language'}},
          match: '^│\\s+(variable.language\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'variable.other'}},
          match: '^│\\s+(variable.other\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'variable.other.constant'}},
          match: '^│\\s+(variable.other.constant\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: 'variable.parameter.function'}},
          match: '^│\\s+(variable.parameter.function\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {
          captures: {1: {name: '$2'}},
          match: '^│\\s+(([a-z][-a-z.]+)\\s+\\S+\\s+░▒▓█+)\\s+│$'
        },
        {match: '^#.*$', name: 'comment.line'}
      ]
    }
  },
  scopeName: 'injections.etc'
}

export default grammar
