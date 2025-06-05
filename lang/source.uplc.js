// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/aiken-lang/vscode-aiken>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.uplc'],
  names: ['untyped-plutus-core'],
  patterns: [
    {include: '#keywords'},
    {include: '#strings'},
    {include: '#constant'},
    {include: '#types'},
    {include: '#entity'}
  ],
  repository: {
    boolean: {
      match: '\\b(True|False)\\b',
      name: 'constant.language.boolean.uplc'
    },
    constant: {
      patterns: [
        {include: '#decimal_number'},
        {include: '#boolean'},
        {match: '#[[:xdigit:]]+\\b', name: 'constant.numeric.hexadecimal.uplc'}
      ]
    },
    decimal_number: {
      match: '\\b[[:digit:]][[:digit:]_]*(\\.[[:digit:]]*)?\\b',
      name: 'constant.numeric.decimal.uplc'
    },
    entity: {
      patterns: [
        {
          match:
            '\\b(addInteger|subtractInteger|multiplyInteger|divideInteger|quotientInteger|remainderInteger|modInteger|equalsInteger|lessThanInteger|lessThanEqualsInteger|appendByteString|consByteString|sliceByteString|lengthOfByteString|indexByteString|equalsByteString|lessThanByteString|lessThanEqualsByteString|sha2_256|sha3_256|blake2b_256|verifyEd25519Signature|verifyEcdsaSecp256k1Signature|verifySchnorrSecp256k1Signature|appendString|equalsString|encodeUtf8|decodeUtf8|ifThenElse|chooseUnit|trace|fstPair|sndPair|chooseList|mkCons|headList|tailList|nullList|chooseData|constrData|mapData|listData|iData|bData|unConstrData|unMapData|unListData|unIData|unBData|equalsData|serialiseData|mkPairData|mkNilData|mkNilPairData|bls12_381_G1_add|bls12_381_G1_neg|bls12_381_G1_scalarMul|bls12_381_G1_equal|bls12_381_G1_compress|bls12_381_G1_uncompress|bls12_381_G1_hashToGroup|bls12_381_G2_add|bls12_381_G2_neg|bls12_381_G2_scalarMul|bls12_381_G2_equal|bls12_381_G2_compress|bls12_381_G2_uncompress|bls12_381_G2_hashToGroup|bls12_381_millerLoop|bls12_381_mulMlResult|bls12_381_finalVerify|integerToByteString|byteStringToInteger|keccak_256|blake2b_224)\\b',
          name: 'entity.name.function.uplc'
        },
        {match: '\\b([[:lower:]][[:word:]]*)\\b', name: 'variable.other.uplc'}
      ]
    },
    keywords: {
      patterns: [
        {
          match: '\\b(program|con|builtin|delay|force|error|lam)\\b',
          name: 'keyword.control.uplc'
        }
      ]
    },
    strings: {
      begin: '"',
      end: '"',
      name: 'string.quoted.double.uplc',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.uplc'}]
    },
    types: {
      match: '\\b(integer|bytestring|bool|unit|string|list|pair)\\b',
      name: 'entity.name.type.uplc'
    }
  },
  scopeName: 'source.uplc'
}

export default grammar
