// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.moo'],
  names: ['mercury'],
  patterns: [
    {include: '#number'},
    {include: '#string_quoted_double'},
    {include: '#inline_bin_op'},
    {include: '#atom'},
    {include: '#block_comment'},
    {include: '#line_comment'},
    {include: '#decl_keywords'},
    {include: '#purity_level'},
    {include: '#declarations'},
    {include: '#common_ops'},
    {include: '#determ_keywords'},
    {include: '#logic_keywords'},
    {include: '#foreign_mods'},
    {include: '#variables'}
  ],
  repository: {
    atom: {
      begin: "'",
      beginCaptures: {
        0: {name: 'punctuation.definition.string.begin.source.mercury'}
      },
      end: "'(?!['])",
      endCaptures: {
        0: {name: 'punctuation.definition.string.end.source.mercury'}
      },
      name: 'string.quoted.single.source.mercury',
      patterns: [
        {match: '\\\\.', name: 'constant.character.escape.source.mercury'},
        {
          match: "\\'\\'",
          name: 'constant.character.escape.quote.source.mercury'
        }
      ]
    },
    block_comment: {
      begin: '/\\*',
      captures: {0: {name: 'punctuation.definition.comment.source.mercury'}},
      end: '\\*/',
      name: 'comment.block.source.mercury'
    },
    common_ops: {
      patterns: [
        {
          match: '(-(?![>-])|[+](?![+])|[*][*]?|/(?![\\\\/])|//|\\\\(?![/=]))',
          name: 'keyword.operator.arithmetic.source.mercury'
        },
        {
          match: '(=<|>=|<(?![=])|(?![-])>)',
          name: 'keyword.operator.comparison.source.mercury'
        },
        {
          match:
            '(<=>|<=|=>|\\\\=|==|:-|=(?![=<>])|,|;|->|/\\\\(?![=])|\\\\/|@)',
          name: 'keyword.operator.logic.source.mercury'
        },
        {
          match: '(-->|--->|[+][+](?![+])|::|:=|![\\.:]?|\\||\\^)',
          name: 'keyword.operator.other.source.mercury'
        },
        {
          match: '(\\(|\\)|\\[|\\]|\\{|\\})',
          name: 'keyword.operator.list.source.mercury'
        },
        {
          match: '\\.(?=[ \\t]*($|%))',
          name: 'keyword.operator.terminator.source.mercury'
        }
      ]
    },
    decl_keywords: {
      match: '\\b(is|where)\\b',
      name: 'keyword.control.declaration.source.mercury'
    },
    declarations: {
      patterns: [
        {
          captures: {1: {name: 'keyword.operator.logic.source.mercury'}},
          match:
            '(?x)(^[ \\t]*:-)[ ]((use|include|end|import|)_module|module |func|pred|type(class)?|inst(ance)? |mode|interface|implementation )\\b',
          name: 'keyword.control.declaration.source.mercury'
        },
        {
          captures: {
            1: {name: 'keyword.operator.logic.source.mercury'},
            2: {name: 'keyword.control.pragma.source.mercury'}
          },
          match:
            '(?x)(^[ \\t]*:-)[ ](pragma)[ ](check_termination|does_not_terminate|fact_table |inline|loop_check|memo|minimal_model|no_inline |obsolete|promise_equivalent_clauses|source_file |terminates|type_spec |foreign_(proc|type|decl|code|export(_enum)? |enum|import_module) )\\b',
          name: 'constant.language.pragma.source.mercury'
        }
      ]
    },
    determ_keywords: {
      match:
        '(?x)\\b(require_(_switch_arms)?)?(multi|cc_(multi|nondet) |det|semidet|nondet |errorneous|failure )\\b',
      name: 'constant.language.determ.source.mercury'
    },
    foreign_mods: {
      match:
        '(?x)\\b(affects_liveness|(does_not|doesnt)_affect_liveness |attach_to_io_state |can_pass_as_mercury_type|stable |(may_call|will_not)(_call_mercury|_modify) |(may_)(not_)?_duplicate |(no_|unknown_)?sharing|tabled_for_io|local |(un)?trailed |(not_|maybe_)?thread_safe |will_not_throw_exception )\\b',
      name: 'storage.type.source.mercury'
    },
    impl_defined_variable: {
      match: '[$][a-zA-Z0-9_]*\\b',
      name: 'variable.language.source.mercury'
    },
    inline_bin_op: {
      match: '`[^`]+`',
      name: 'keyword.operator.other.source.mercury'
    },
    line_comment: {
      begin: '(^[ \\t]+)?(%([-]+%)?)',
      beginCaptures: {
        1: {name: 'punctuation.whitespace.comment.leading.source.mercury'},
        2: {name: 'comment.line.percentage.source.mercury'}
      },
      end: '(?!\\G)',
      name: 'comment.comment.source.mercury',
      patterns: [
        {
          captures: {
            0: {name: 'comment.comment.source.mercury'},
            1: {name: 'constant.language.warn.source.mercury'}
          },
          match:
            '(([ \\t]+(XXX|TODO|FIXME|WARNING|IMPORTANT|NOTE(_TO_IMPLEMENTORS)?)\\b)*)(.*)'
        }
      ]
    },
    logic_keywords: {
      match:
        '(?x)\\b(yes|no|true|false|(semidet_)?succeed|(semidet_)?fail |some|all|require_complete_switch )\\b',
      name: 'constant.language.logic.source.mercury'
    },
    number: {
      match:
        "\\b(0(?!['])[0-7]*|0['].|[1-9][0-9]*|\\.[0-9]+([eE][0-9]+)?|0[xX][0-9a-fA-F]+|0[bB][01]+)\\b",
      name: 'constant.numeric.source.mercury'
    },
    purity_level: {
      match: '\\b((promise_)(semi)?pure|(im|semi)?pure)\\b',
      name: 'storage.type.source.mercury'
    },
    singleton_variable: {
      match: '\\b_[A-Z]?[a-zA-Z0-9_]*\\b',
      name: 'support.variable'
    },
    string_quoted_double: {
      begin: '"',
      beginCaptures: {
        0: {name: 'punctuation.literal.string.begin.source.mercury'}
      },
      end: '"(?!")',
      endCaptures: {0: {name: 'punctuation.literal.string.end.source.mercury'}},
      name: 'string.quoted.double.source.mercury',
      patterns: [
        {match: '\\\\.', name: 'constant.character.escapesource.mercury'},
        {match: '""', name: 'constant.character.escape.quote.source.mercury'},
        {
          match: '%[I]?[-+# *\\.0-9]*[dioxXucsfeEgGp]',
          name: 'constant.character.escape.format.source.mercury'
        }
      ]
    },
    variable: {match: '\\b[A-Z][a-zA-Z0-9_]*\\b', name: 'variable.other'},
    variables: {
      patterns: [
        {include: '#impl_defined_variable'},
        {include: '#singleton_variable'},
        {include: '#variable'}
      ]
    }
  },
  scopeName: 'source.mercury'
}

export default grammar
