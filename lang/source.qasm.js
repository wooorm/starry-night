// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.qasm'],
  names: ['openqasm'],
  patterns: [
    {match: '\\/\\/.*$', name: 'comment.line.double-slash'},
    {match: '#.*$', name: 'comment.line.number-sign'},
    {
      match:
        '^(?x)                                  # At beggining of line\n(\\.)                                  # Valid function name\n(\n  (?: [-a-zA-Z_0-9]|[^\\x00-\\x7F]     # Valid identifier characters\n    | \\\\(?:[0-9a-fA-F]{1,6}|.)       # Escape sequence\n  )+\n)                                      # Followed by either:\n(?= $                                  # - End of the line\n  | [\\s,.\\#)\\[:{>+~|]               # - Another selector\n  | #                                  # - A comment\n)',
      name: 'entity.name.function'
    },
    {
      match: '(?x)\\b(include|OPENQASM|version)\\b',
      name: 'entity.name.section'
    },
    {match: '(?x)\\b(qubit|qubits|map)\\b', name: 'variable.language'},
    {
      match: '(?<=(\\w\\[)|(:))( *\\d *)(?=(\\s*\\])|(:))',
      name: 'constant.other'
    },
    {match: '->', name: 'keyword.storage.modifier'},
    {match: "('.*')", name: 'constant.string.single'},
    {match: '".*"', name: 'constant.string.double'},
    {match: '(?x)^\\b(?:(qreg|creg)| (gate|opaque))\\b', name: 'storage.type'},
    {
      match:
        '(?x)\\b(?:(prep_x|prep_y|prep_z|error_model)| (measure_x|measure_y|measure_z|measure_all|measure_parity|measure)| (display|display_binary))\\b',
      name: 'support.function'
    },
    {
      match:
        '(?i)(?x)\\b(?:((i|h|x|y|z)| (rx|ry|rz)| (x90|y90|z90|rx90|ry90|rz90|mx90|my90|mz90)| (x180|y180|z180|rx180|ry180|rz180|mx180|my180|mz180)| (u1|u2|u3|cu1|cu2|cu3)| (s|sdag|t|tdag)| (cnot|cx|cz|cr|crk|toffoli|ccx|ccnot)| (swap) ))\\b',
      name: 'keyword.control'
    },
    {
      match:
        '(?i)(?x)\\bc-(?:((i|h|x|y|z)| (rx|ry|rz)| (x90|y90|z90|rx90|ry90|rz90|mx90|my90|mz90)| (x180|y180|z180|rx180|ry180|rz180|mx180|my180|mz180)| (u1|u2|u3)| (s|sdag|t|tdag)| (cnot|cx|cz|cr|crk|toffoli|ccx|ccnot)| (swap) ))\\b',
      name: 'keyword.control'
    },
    {match: '(?i)(?x)\\b(?:(not )|(if(?=[( ])))\\b', name: 'keyword.control'},
    {
      match: '\\b(depolarizing_channel|load_state|barrier)\\b',
      name: 'variable.language'
    }
  ],
  scopeName: 'source.qasm'
}

export default grammar
