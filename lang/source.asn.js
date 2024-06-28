// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/ajlangley/language-asn1>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.asn', '.asn1'],
  names: ['asn.1'],
  patterns: [
    {match: '--.*$', name: 'comment.line.asn'},
    {match: '::=', name: 'storage.type.asn'},
    {match: '\\|', name: 'storage.type.asn'},
    {match: '\\.\\.', name: 'keyword.operator.asn'},
    {match: '(SEQUENCE|SET|CLASS|CHOICE|OF)', name: 'storage.type.asn'},
    {
      match:
        '(BOOLEAN|INTEGER|ENUMERATED|REAL|(BIT|OCTET) STRING|NULL|OBJECT IDENTIFIER|ANY|DATE|DATE-TIME|(Numeric|Printable|Teletex|IA5|Visible|Graphic|General)String|(Generalized|UTC)Time|EXTERNAL|Object Descriptor)',
      name: 'variable.language.asn'
    },
    {
      match: '([-+]?[0-9]+|[-+]?\\.[0-9]+)(?=\\)|\\.\\.)',
      name: 'constant.numeric.float.asn'
    },
    {begin: '"', end: '"', name: 'string.quoted.double.asn'},
    {match: 'OPTIONAL|SIZE|\\^ FROM', name: 'storage.modifier.asn'},
    {
      match: 'DEFINITIONS|AUTOMATIC TAGS|BEGIN|END',
      name: 'entity.name.type.class.asn'
    },
    {match: 'IMPORTS|FROM', name: 'support.constant.asn'},
    {match: '(IM|EX)PLICIT', name: 'constant.language.asn'}
  ],
  scopeName: 'source.asn'
}

export default grammar
