// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/wgsl-analyzer/wgsl-analyzer>
// and licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.wgsl'],
  names: ['wgsl'],
  patterns: [
    {include: '#line_comments'},
    {include: '#keywords'},
    {include: '#functions'},
    {include: '#function_calls'},
    {include: '#constants'},
    {include: '#types'},
    {include: '#variables'},
    {include: '#punctuation'}
  ],
  repository: {
    constants: {
      patterns: [
        {
          match: '(-?\\b[0-9][0-9]*\\.[0-9][0-9]*)([eE][+-]?[0-9]+)?\\b',
          name: 'constant.numeric.float.wgsl'
        },
        {
          match: '-?\\b0x[0-9a-fA-F]+\\b|\\b0\\b|-?\\b[1-9][0-9]*\\b',
          name: 'constant.numeric.decimal.wgsl'
        },
        {
          match: '\\b0x[0-9a-fA-F]+u\\b|\\b0u\\b|\\b[1-9][0-9]*u\\b',
          name: 'constant.numeric.decimal.wgsl'
        },
        {match: '\\b(true|false)\\b', name: 'constant.language.boolean.wgsl'}
      ]
    },
    function_calls: {
      patterns: [
        {
          begin: '([A-Za-z0-9_]+)(\\()',
          beginCaptures: {
            1: {name: 'entity.name.function.wgsl'},
            2: {name: 'punctuation.brackets.round.wgsl'}
          },
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.brackets.round.wgsl'}},
          name: 'meta.function.call.wgsl',
          patterns: [
            {include: '#line_comments'},
            {include: '#keywords'},
            {include: '#function_calls'},
            {include: '#constants'},
            {include: '#types'},
            {include: '#variables'},
            {include: '#punctuation'}
          ]
        }
      ]
    },
    functions: {
      patterns: [
        {
          begin: '\\b(fn)\\s+([A-Za-z0-9_]+)((\\()|(<))',
          beginCaptures: {
            1: {name: 'keyword.other.fn.wgsl'},
            2: {name: 'entity.name.function.wgsl'},
            4: {name: 'punctuation.brackets.round.wgsl'}
          },
          end: '\\{',
          endCaptures: {0: {name: 'punctuation.brackets.curly.wgsl'}},
          name: 'meta.function.definition.wgsl',
          patterns: [
            {include: '#line_comments'},
            {include: '#keywords'},
            {include: '#function_calls'},
            {include: '#constants'},
            {include: '#types'},
            {include: '#variables'},
            {include: '#punctuation'}
          ]
        }
      ]
    },
    keywords: {
      patterns: [
        {
          match:
            '\\b(bitcast|block|break|case|continue|continuing|default|discard|else|elseif|enable|fallthrough|for|function|if|loop|override|private|read|read_write|return|storage|switch|uniform|while|workgroup|write)\\b',
          name: 'keyword.control.wgsl'
        },
        {
          match:
            '\\b(asm|const|do|enum|handle|mat|premerge|regardless|typedef|unless|using|vec|void)\\b',
          name: 'keyword.control.wgsl'
        },
        {
          match: '\\b(let|var)\\b',
          name: 'keyword.other.wgsl storage.type.wgsl'
        },
        {
          match: '\\b(type)\\b',
          name: 'keyword.declaration.type.wgsl storage.type.wgsl'
        },
        {
          match: '\\b(enum)\\b',
          name: 'keyword.declaration.enum.wgsl storage.type.wgsl'
        },
        {
          match: '\\b(struct)\\b',
          name: 'keyword.declaration.struct.wgsl storage.type.wgsl'
        },
        {match: '\\bfn\\b', name: 'keyword.other.fn.wgsl'},
        {
          match: '(\\^|\\||\\|\\||&&|<<|>>|!)(?!=)',
          name: 'keyword.operator.logical.wgsl'
        },
        {match: '&(?![&=])', name: 'keyword.operator.borrow.and.wgsl'},
        {
          match: '(\\+=|-=|\\*=|/=|%=|\\^=|&=|\\|=|<<=|>>=)',
          name: 'keyword.operator.assignment.wgsl'
        },
        {
          match: '(?<![<>])=(?!=|>)',
          name: 'keyword.operator.assignment.equal.wgsl'
        },
        {
          match: '(=(=)?(?!>)|!=|<=|(?<!=)>=)',
          name: 'keyword.operator.comparison.wgsl'
        },
        {
          match: '(([+%]|(\\*(?!\\w)))(?!=))|(-(?!>))|(/(?!/))',
          name: 'keyword.operator.math.wgsl'
        },
        {match: '\\.(?!\\.)', name: 'keyword.operator.access.dot.wgsl'},
        {match: '->', name: 'keyword.operator.arrow.skinny.wgsl'}
      ]
    },
    line_comments: {match: '\\s*//.*', name: 'comment.line.double-slash.wgsl'},
    punctuation: {
      patterns: [
        {match: ',', name: 'punctuation.comma.wgsl'},
        {match: '[{}]', name: 'punctuation.brackets.curly.wgsl'},
        {match: '[()]', name: 'punctuation.brackets.round.wgsl'},
        {match: ';', name: 'punctuation.semi.wgsl'},
        {match: '[\\[\\]]', name: 'punctuation.brackets.square.wgsl'},
        {match: '(?<!=)[<>]', name: 'punctuation.brackets.angle.wgsl'}
      ]
    },
    types: {
      name: 'storage.type.wgsl',
      patterns: [
        {match: '\\b(bool|i32|u32|f32)\\b', name: 'storage.type.wgsl'},
        {match: '\\b(i64|u64|f64)\\b', name: 'storage.type.wgsl'},
        {match: '\\b(vec[2-4]|mat[2-4]x[2-4])\\b', name: 'storage.type.wgsl'},
        {match: '\\b(atomic)\\b', name: 'storage.type.wgsl'},
        {match: '\\b(array)\\b', name: 'storage.type.wgsl'},
        {match: '\\b([A-Z][A-Za-z0-9]*)\\b', name: 'entity.name.type.wgsl'}
      ]
    },
    variables: {
      patterns: [
        {
          match:
            '\\b(?<!(?<!\\.)\\.)(?:r#(?!(crate|[Ss]elf|super)))?[a-z0-9_]+\\b',
          name: 'variable.other.wgsl'
        }
      ]
    }
  },
  scopeName: 'source.wgsl'
}

export default grammar
