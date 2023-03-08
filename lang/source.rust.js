// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/dustypomerleau/rust-syntax>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.rs', '.rs.in'],
  names: ['rust', 'rs'],
  patterns: [
    {
      begin: '\\b(impl)\\b',
      beginCaptures: {1: {name: 'storage.type.rust'}},
      end: '\\{',
      patterns: [
        {include: '#block_comment'},
        {include: '#line_comment'},
        {include: '#sigils'},
        {include: '#mut'},
        {include: '#dyn'},
        {include: '#ref_lifetime'},
        {include: '#core_types'},
        {include: '#core_marker'},
        {include: '#core_traits'},
        {include: '#std_types'},
        {include: '#std_traits'},
        {include: '#type_params'},
        {include: '#where'},
        {match: '\\bfor\\b', name: 'storage.type.rust'},
        {include: '#type'}
      ]
    },
    {include: '#block_doc_comment'},
    {include: '#block_comment'},
    {include: '#line_doc_comment'},
    {include: '#line_comment'},
    {
      begin: '#\\!?\\[',
      end: '\\]',
      name: 'meta.attribute.rust',
      patterns: [
        {include: '#string_literal'},
        {include: '#block_doc_comment'},
        {include: '#block_comment'},
        {include: '#line_doc_comment'},
        {include: '#line_comment'}
      ]
    },
    {
      match:
        "b?'([^'\\\\]|\\\\(x[0-9A-Fa-f]{2}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.))'",
      name: 'string.quoted.single.rust'
    },
    {include: '#string_literal'},
    {include: '#raw_string_literal'},
    {
      match: '\\b[0-9][0-9_]*\\.[0-9][0-9_]*([eE][+-]?[0-9_]+)?(f32|f64)?\\b',
      name: 'constant.numeric.float.rust'
    },
    {
      match: '\\b[0-9][0-9_]*(\\.[0-9][0-9_]*)?[eE][+-]?[0-9_]+(f32|f64)?\\b',
      name: 'constant.numeric.float.rust'
    },
    {
      match: '\\b[0-9][0-9_]*(\\.[0-9][0-9_]*)?([eE][+-]?[0-9_]+)?(f32|f64)\\b',
      name: 'constant.numeric.float.rust'
    },
    {
      match: '\\b[0-9][0-9_]*([ui](8|16|32|64|128|s|size))?\\b',
      name: 'constant.numeric.integer.decimal.rust'
    },
    {
      match: '\\b0x[a-fA-F0-9_]+([ui](8|16|32|64|128|s|size))?\\b',
      name: 'constant.numeric.integer.hexadecimal.rust'
    },
    {
      match: '\\b0o[0-7_]+([ui](8|16|32|64|128|s|size))?\\b',
      name: 'constant.numeric.integer.octal.rust'
    },
    {
      match: '\\b0b[01_]+([ui](8|16|32|64|128|s|size))?\\b',
      name: 'constant.numeric.integer.binary.rust'
    },
    {match: '\\bstatic\\b', name: 'storage.modifier.static.rust'},
    {match: '\\b(true|false)\\b', name: 'constant.language.boolean.rust'},
    {
      match:
        '\\b(async|await|break|continue|else|if|in|for|loop|match|return|try|while)\\b',
      name: 'keyword.control.rust'
    },
    {
      match: '\\b(crate|extern|mod|let|ref|use|super|move)\\b',
      name: 'keyword.other.rust'
    },
    {
      match:
        '\\b(abstract|alignof|become|do|final|macro|offsetof|override|priv|proc|pure|sizeof|typeof|virtual|yield)\\b',
      name: 'invalid.deprecated.rust'
    },
    {include: '#unsafe'},
    {include: '#sigils'},
    {include: '#self'},
    {include: '#mut'},
    {include: '#dyn'},
    {include: '#impl'},
    {include: '#box'},
    {include: '#lifetime'},
    {include: '#ref_lifetime'},
    {include: '#const'},
    {include: '#pub'},
    {match: '(=>|::|\\bas\\b)', name: 'keyword.operator.misc.rust'},
    {match: '(&&|\\|\\||==|!=)', name: 'keyword.operator.comparison.rust'},
    {
      match: '(\\+=|-=|/=|\\*=|%=|\\^=|&=|\\|=|<<=|>>=|=)',
      name: 'keyword.operator.assignment.rust'
    },
    {
      match: '(!|\\+|-|/|\\*|%|\\^|&|\\||<<|>>)',
      name: 'keyword.operator.arithmetic.rust'
    },
    {match: '(<=|>=|<|>)', name: 'keyword.operator.comparison.rust'},
    {include: '#core_types'},
    {include: '#core_vars'},
    {include: '#core_marker'},
    {include: '#core_traits'},
    {include: '#std_types'},
    {include: '#std_traits'},
    {
      match:
        '\\b(macro_rules|compile_error|format_args|env|option_env|concat_idents|concat|line|column|file|stringify|include|include_str|include_bytes|module_path|cfg)!',
      name: 'support.function.builtin.rust'
    },
    {
      match:
        '\\b(panic|assert|assert_eq|assert_ne|debug_assert|debug_assert_eq|debug_assert_ne|try|write|writeln|unreachable|unimplemented)!',
      name: 'support.function.core.rust'
    },
    {
      match: '\\b(format|print|println|eprint|eprintln|select|vec)!',
      name: 'support.function.std.rust'
    },
    {
      match: '\\b(log|error|warn|info|debug|trace|log_enabled)!',
      name: 'support.function.log.rust'
    },
    {
      captures: {1: {name: 'entity.name.function.macro.rust'}},
      match: '\\b([a-zA-Z_][a-zA-Z0-9_]*\\!)\\s*[({\\[]'
    },
    {
      captures: {1: {name: 'entity.name.function.rust'}},
      match: '\\b([A-Za-z][A-Za-z0-9_]*|_[A-Za-z0-9_]+)\\s*\\('
    },
    {
      begin:
        '\\b([A-Za-z][A-Za-z0-9_]*|_[A-Za-z0-9_]+)\\s*(::)(?=\\s*<.*>\\s*\\()',
      captures: {
        1: {name: 'entity.name.function.rust'},
        2: {name: 'keyword.operator.misc.rust'}
      },
      end: '\\(',
      patterns: [{include: '#type_params'}]
    },
    {
      begin: '\\b(fn)\\s+([A-Za-z][A-Za-z0-9_]*|_[A-Za-z0-9_]+)',
      beginCaptures: {
        1: {name: 'keyword.other.fn.rust'},
        2: {name: 'entity.name.function.rust'}
      },
      end: '[\\{;]',
      patterns: [
        {include: '#block_comment'},
        {include: '#line_comment'},
        {include: '#sigils'},
        {include: '#self'},
        {include: '#mut'},
        {include: '#dyn'},
        {include: '#impl'},
        {include: '#ref_lifetime'},
        {include: '#core_types'},
        {include: '#core_marker'},
        {include: '#core_traits'},
        {include: '#std_types'},
        {include: '#std_traits'},
        {include: '#type_params'},
        {include: '#const'},
        {include: '#where'},
        {include: '#unsafe'},
        {match: '\bfn\b', name: 'keyword.other.fn.rust'}
      ]
    },
    {
      begin: '\\b(enum|struct|trait|union)\\s+([a-zA-Z_][a-zA-Z0-9_]*)',
      beginCaptures: {
        1: {name: 'storage.type.rust'},
        2: {name: 'entity.name.type.rust'}
      },
      end: '[\\{\\(;]',
      patterns: [
        {include: '#block_comment'},
        {include: '#line_comment'},
        {include: '#core_traits'},
        {include: '#std_traits'},
        {include: '#type_params'},
        {include: '#core_types'},
        {include: '#pub'},
        {include: '#where'}
      ]
    },
    {
      begin: '\\b(type)\\s+([a-zA-Z_][a-zA-Z0-9_]*)',
      beginCaptures: {
        1: {name: 'storage.type.rust'},
        2: {name: 'entity.name.type.rust'}
      },
      end: ';',
      patterns: [
        {include: '#block_comment'},
        {include: '#line_comment'},
        {include: '#sigils'},
        {include: '#mut'},
        {include: '#dyn'},
        {include: '#impl'},
        {include: '#lifetime'},
        {include: '#ref_lifetime'},
        {include: '#core_types'},
        {include: '#core_marker'},
        {include: '#core_traits'},
        {include: '#std_types'},
        {include: '#std_traits'},
        {include: '#type_params'}
      ]
    }
  ],
  repository: {
    block_comment: {
      begin: '/\\*',
      end: '\\*/',
      name: 'comment.block.rust',
      patterns: [{include: '#block_doc_comment'}, {include: '#block_comment'}]
    },
    block_doc_comment: {
      begin: '/\\*[\\*!](?![\\*/])',
      end: '\\*/',
      name: 'comment.block.documentation.rust',
      patterns: [{include: '#block_doc_comment'}, {include: '#block_comment'}]
    },
    box: {match: '\\bbox\\b', name: 'storage.modifier.box.rust'},
    const: {match: '\\bconst\\b', name: 'storage.modifier.const.rust'},
    core_marker: {
      match: '\\b(Copy|Send|Sized|Sync)\\b',
      name: 'support.type.marker.rust'
    },
    core_traits: {
      match:
        '\\b(Drop|Fn|FnMut|FnOnce|Clone|PartialEq|PartialOrd|Eq|Ord|AsRef|AsMut|Into|From|Default|Iterator|Extend|IntoIterator|DoubleEndedIterator|ExactSizeIterator)\\b',
      name: 'support.type.core.rust'
    },
    core_types: {
      match:
        '\\b(bool|char|usize|isize|u8|u16|u32|u64|u128|i8|i16|i32|i64|i128|f32|f64|str|Self|Option|Result)\\b',
      name: 'storage.type.core.rust'
    },
    core_vars: {
      match: '\\b(Some|None|Ok|Err)\\b',
      name: 'support.constant.core.rust'
    },
    dyn: {match: '\\bdyn\\b', name: 'storage.modifier.dyn.rust'},
    escaped_character: {
      match:
        '\\\\(x[0-9A-Fa-f]{2}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)',
      name: 'constant.character.escape.rust'
    },
    impl: {match: '\\bimpl\\b', name: 'storage.modifier.impl.rust'},
    lifetime: {
      captures: {1: {name: 'entity.name.lifetime.rust'}},
      match: "'([a-zA-Z_][a-zA-Z0-9_]*)\\b",
      name: 'storage.modifier.lifetime.rust'
    },
    line_comment: {
      begin: '//',
      end: '$',
      name: 'comment.line.double-slash.rust'
    },
    line_doc_comment: {
      begin: '//[!/](?=[^/])',
      end: '$',
      name: 'comment.line.documentation.rust'
    },
    mut: {match: '\\bmut\\b', name: 'storage.modifier.mut.rust'},
    pub: {match: '\\bpub\\b', name: 'storage.modifier.visibility.rust'},
    raw_string_literal: {
      begin: 'b?r(#*)"',
      end: '"\\1',
      name: 'string.quoted.double.raw.rust'
    },
    ref_lifetime: {
      captures: {
        1: {name: 'storage.modifier.lifetime.rust'},
        2: {name: 'entity.name.lifetime.rust'}
      },
      match: "&('([a-zA-Z_][a-zA-Z0-9_]*))\\b"
    },
    self: {match: '\\bself\\b', name: 'variable.language.rust'},
    sigils: {
      match: '[&*](?=[a-zA-Z0-9_\\(\\[\\|\\"]+)',
      name: 'keyword.operator.sigil.rust'
    },
    std_traits: {
      match: '\\b(ToOwned|ToString)\\b',
      name: 'support.type.std.rust'
    },
    std_types: {
      match: '\\b(Box|String|Vec|Path|PathBuf)\\b',
      name: 'storage.class.std.rust'
    },
    string_literal: {
      begin: 'b?"',
      end: '"',
      name: 'string.quoted.double.rust',
      patterns: [{include: '#escaped_character'}]
    },
    type: {
      match: '\\b([A-Za-z][_A-Za-z0-9]*|_[_A-Za-z0-9]+)\\b',
      name: 'entity.name.type.rust'
    },
    type_params: {
      begin: '<(?![=<])',
      end: '(?<![-])>',
      name: 'meta.type_params.rust',
      patterns: [
        {include: '#block_comment'},
        {include: '#line_comment'},
        {include: '#sigils'},
        {include: '#mut'},
        {include: '#dyn'},
        {include: '#impl'},
        {include: '#lifetime'},
        {include: '#core_types'},
        {include: '#core_marker'},
        {include: '#core_traits'},
        {include: '#std_types'},
        {include: '#std_traits'},
        {include: '#type_params'}
      ]
    },
    unsafe: {match: '\\bunsafe\\b', name: 'keyword.other.unsafe.rust'},
    where: {match: '\\bwhere\\b', name: 'keyword.other.where.rust'}
  },
  scopeName: 'source.rust'
}

export default grammar
