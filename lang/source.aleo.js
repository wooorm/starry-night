// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/ProvableHQ/aleo-linguist>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.aleo'],
  names: ['aleo'],
  patterns: [
    {include: '#block_comment'},
    {include: '#line_comment'},
    {include: '#strings'},
    {include: '#identifier_literal'},
    {include: '#instructions'},
    {include: '#special_operands'},
    {include: '#keywords'},
    {include: '#visibility'},
    {include: '#base_register'},
    {include: '#address'},
    {include: '#signature'},
    {include: '#literal_type'},
    {include: '#register_type'},
    {include: '#boolean_literal'},
    {include: '#numeric_literal'},
    {include: '#punctuation'}
  ],
  repository: {
    address: {
      match: '\\baleo1[qpzry9x8gf2tvdw0s3jn54khce6mua7l_]+\\b',
      name: 'constant.other.address.aleo'
    },
    base_register: {
      match: '\\br[0-9]+\\b',
      name: 'variable.other.register.aleo'
    },
    block_comment: {begin: '/\\*', end: '\\*/', name: 'comment.block.aleo'},
    boolean_literal: {
      match: '\\b(true|false)\\b',
      name: 'constant.language.boolean.aleo'
    },
    identifier_literal: {
      match: "'[A-Za-z][A-Za-z0-9_]*'",
      name: 'string.quoted.single.identifier.aleo'
    },
    instructions: {
      match:
        '\\b(abs(?:\\.w)?|add(?:\\.w)?|and|assert\\.(?:eq|neq)|async|await|branch\\.(?:eq|neq)|call(?:\\.dynamic)?|cast(?:\\.lossy)?|commit\\.(?:bhp(?:256|512|768|1024)|ped(?:64|128))(?:\\.raw)?|contains(?:\\.dynamic)?|deserialize\\.bits(?:\\.raw)?|div(?:\\.w)?|double|ecdsa\\.verify\\.(?:digest(?:\\.eth)?|(?:keccak(?:256|384|512)|sha3_(?:256|384|512))(?:\\.(?:eth|raw))?)|get(?:\\.record\\.dynamic|\\.or_use(?:\\.dynamic)?|\\.dynamic)?|gt|gte|hash\\.(?:(?:bhp(?:256|512|768|1024)|ped(?:64|128)|psd(?:2|4|8))(?:\\.raw)?|(?:keccak(?:256|384|512)|sha3_(?:256|384|512))(?:\\.native)?(?:\\.raw)?)|hash_many\\.psd(?:2|4|8)|inv|is\\.(?:eq|neq)|lt|lte|mod|mul(?:\\.w)?|nand|neg|nor|not|or|position|pow(?:\\.w)?|rand\\.chacha|rem(?:\\.w)?|remove|serialize\\.bits(?:\\.raw)?|set|shl(?:\\.w)?|shr(?:\\.w)?|sign\\.verify|snark\\.verify(?:\\.batch)?|sqrt|square|sub(?:\\.w)?|ternary|xor)(?![A-Za-z0-9_.])',
      name: 'entity.other.instruction.aleo'
    },
    keywords: {
      match:
        '\\b(as|closure|constructor|finalize|function|import|input|into|key|mapping|output|owner|program|record|self|storage|struct|to|transition|value|view|with)\\b',
      name: 'keyword.control.aleo'
    },
    line_comment: {
      begin: '//',
      end: '$',
      name: 'comment.line.double-slash.aleo'
    },
    literal_type: {
      match:
        '\\b(address|boolean|field|group|i8|i16|i32|i64|i128|identifier|scalar|signature|string|u8|u16|u32|u64|u128)\\b',
      name: 'storage.type.primitive.aleo'
    },
    numeric_literal: {
      match:
        '(?<![A-Za-z0-9_])(?:-[0-9][0-9_]*(?:i(?:8|16|32|64|128)|field|group|scalar)|[0-9][0-9_]*(?:[iu](?:8|16|32|64|128)|field|group|scalar))(?![A-Za-z0-9_])',
      name: 'constant.numeric.aleo'
    },
    punctuation: {match: '[()\\[\\]:;,]', name: 'punctuation.aleo'},
    register_type: {
      match: '\\b(dynamic\\.(?:future|record)|future)\\b',
      name: 'storage.type.register.aleo'
    },
    signature: {
      match: '\\bsign1[qpzry9x8gf2tvdw0s3jn54khce6mua7l_]+\\b',
      name: 'constant.other.signature.aleo'
    },
    special_operands: {
      match:
        '\\b(aleo::GENERATOR_POWERS(?:\\[[0-9][0-9_]*u32\\])?|aleo::GENERATOR|block\\.(?:height|timestamp)|group::GEN|network\\.id|self\\.(?:caller|signer)|(?:[A-Za-z][A-Za-z0-9_]*\\.aleo/)?(?:[A-Za-z][A-Za-z0-9_]*/)?checksum|(?:[A-Za-z][A-Za-z0-9_]*\\.aleo/)?(?:edition|program_owner))(?![A-Za-z0-9_.])',
      name: 'constant.language.aleo'
    },
    strings: {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.aleo',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.aleo'}]
    },
    visibility: {
      match: '\\b(const|constant|private|public)\\b',
      name: 'storage.modifier.aleo'
    }
  },
  scopeName: 'source.aleo'
}

export default grammar
