/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [],
  names: [],
  patterns: [
    {
      captures: {
        1: {name: 'manref.subject'},
        2: {name: 'manref.section'},
        3: {name: 'punctuation.definition.begin.manref'},
        4: {name: 'manref.section-number'},
        5: {name: 'manref.section-group'},
        6: {name: 'punctuation.definition.end.manref'}
      },
      match:
        '(?xi)\n# Subject\n((?:\n\t[^:\\s()<>/"\'`{}!&*\\#?\\\\]\n\t|\n\t# Avoid matching scheme component of “man:man(1)” URLs\n\t(?-i: (?<!man)\n\t|     (?<=[-\\w]man)\n\t) :\n)+)\n\n# Section\n((?i)\n\t(\\()\n\t( [0-9](?![0-9])         # Section number\n\t| (?:[lnop]|tcl)(?=[/)]) # Non-numeric section\n\t)\n\t\n\t# Section group\n\t([a-z_0-9:/]*?(?:/(?!/)[-a-z_0-9:./]+)?)\n\t(\\))\n)',
      name: 'manref'
    }
  ],
  scopeName: 'hidden.manref'
}

export default grammar
