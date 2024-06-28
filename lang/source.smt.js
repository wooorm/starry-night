// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `unlicense`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.smt2', '.smt'],
  names: ['smt'],
  patterns: [
    {
      begin: '(^[ \\t]+)?(?=;)',
      beginCaptures: {1: {name: 'punctuation.whitespace.comment.leading.smt'}},
      end: '(?!\\G)',
      patterns: [
        {
          begin: ';',
          beginCaptures: {0: {name: 'punctuation.definition.comment.smt'}},
          end: '\\n',
          name: 'comment.line.semicolon.smt'
        }
      ]
    },
    {
      captures: {
        2: {name: 'storage.type.function-type.smt'},
        4: {name: 'entity.name.function.smt'}
      },
      match:
        '(?x)                                                  (?# multiline mode )\n\t\t\t         (\\b(?i:(define-fun|define-fun-rec|define-sort))\\b)\n\t\t\t\t\t (\\s+)\n\t\t\t\t\t ((\\w|\\.|\\||_|@|%|\\-|\\!|\\?)*)',
      name: 'meta.function.define.smt'
    },
    {
      captures: {
        2: {name: 'storage.type.function-type.smt'},
        4: {name: 'entity.name.function.smt'}
      },
      match:
        '(\\b(?i:(declare-sort|declare-fun|declare-const))\\b)(\\s+)((\\w|\\.|\\||_|@|%|\\-|\\!|\\?)*)',
      name: 'meta.function.declare.smt'
    },
    {
      captures: {1: {name: 'punctuation.definition.constant.smt'}},
      match: '(#|\\?)(\\w|[\\\\+-=<>\'"&#])+',
      name: 'constant.character.smt'
    },
    {
      match: '\\b(?i:as|let|exists|forall|par|_)\\b',
      name: 'keyword.control.smt'
    },
    {
      match:
        '(?x)(\\:)(assertion-stack-levels|authors|chainable|definition|diagnostic-output-channel\n                      |error-behavior|extensions|funs|funs-description|global-declarations|interactive-mode\n                      |language|left-assoc|name|named|notes|pattern|print-success|produce-assignments\n                      |produce-models|produce-proofs|produce-unsat-assumptions|produce-unsat-cores\n                      |random-seed|reason-unknown|regular-output-channel|reproducible-resource-limit|right-assoc\n                      |sorts|sorts-description|status|theories|values|verbosity|version)',
      name: 'keyword.other.predefined.smt'
    },
    {
      match:
        '(?x)\\b(?i:assert|check-sat|check-sat-assuming|echo|exit\n                     |get-assertions|get-assignment|get-info|get-model|get-option\n                     |get-proof|get-unsat-assumptions|get-unsat-core|get-value\n\t\t\t\t\t |pop|push|reset|reset-assertions|set-info|set-logic|set-option)\\b',
      name: 'keyword.control.commands.smt'
    },
    {
      match: '\\b(?i:ite|not|or|and|xor|distinct)\\b',
      name: 'keyword.operator.core.smt'
    },
    {
      match: '\\b(?i:array|select|store)\\b',
      name: 'keyword.operator.array.smt'
    },
    {
      match:
        '(?x)\n\t\t\t\t\t \\b(BitVec|concat|extract|bvnot|bvneg|bvand|bvor|bvadd|bvmul|bvudiv|bvurem|bvshl|bvlshr|bvult   (?#  FixedSizeBitVectors )\n\t\t\t\t\t |bvnand|bvnor|bvxor|bvxnor|bvcomp|bvsub|bvsdiv|bvsrem|bvsmod|bvashr|repeat|zero_extend         (?#  QF_BV)\n\t\t\t\t\t |sign_extend|rotate_left|rotate_right|bvule|bvugt|bvuge|bvslt|bvsle|bvsgt|bvsge|bv[0-9]+       (?#  QF_BV)\n\t\t\t\t \t)\\b',
      name: 'keyword.operator.bitvector.smt'
    },
    {match: '\\b(Int|div|mod|abs)\\b', name: 'keyword.operator.ints.smt'},
    {
      match: '\\b(RoundingMode|FloatingPoint|Nan|div|mod|abs)\\b',
      name: 'keyword.operator.floatingpoint.smt'
    },
    {match: '\\b(Real)\\b', name: 'keyword.operator.reals.smt'},
    {
      match: '\\b(divisible|to_real|to_int|is_int)\\b',
      name: 'keyword.operator.reals_ints.smt'
    },
    {match: '\\b(?i:eq|neq|and|or)\\b', name: 'keyword.operator.smt'},
    {
      match:
        '(?x)\\b(Bool|continued-execution|error|false|immediate-exit|incomplete|logic\n                    \t|memout|sat|success|theory|true|unknown|unsupported|unsat)\\b',
      name: 'constant.language.smt'
    },
    {
      match:
        '\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b',
      name: 'constant.numeric.smt'
    },
    {
      match:
        '(?x)\n\t\t\t\t(?<=(\\s|\\()) # preceded by space or (\n\t\t\t\t( > | < | >= | <= | => | = | ! | [*/+-] )\n\t\t\t\t(?=(\\s|\\()) # followed by space or (\n\t\t\t\t',
      name: 'keyword.operator.logical.smt'
    },
    {
      begin: '\\|',
      beginCaptures: {0: {name: 'punctuation.definition.symbol.begin.smt'}},
      end: '\\|',
      endCaptures: {0: {name: 'punctuation.definition.symbol.end.smt'}},
      name: 'variable.parameter.symbol.smt',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.smt'}]
    },
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.smt'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.smt'}},
      name: 'string.quoted.double.smt',
      patterns: [{match: '\\\\.', name: 'constant.character.escape.smt'}]
    }
  ],
  scopeName: 'source.smt'
}

export default grammar
