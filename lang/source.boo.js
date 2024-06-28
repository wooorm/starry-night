// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/drslump/sublime-boo>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.boo'],
  names: ['boo'],
  patterns: [
    {
      captures: {
        1: {name: 'storage.modifier.boo'},
        3: {name: 'storage.type.class.boo'},
        4: {name: 'entity.name.type.class.boo'}
      },
      match:
        '^\\s*((static|partial|abstract|final)\\s+)*(class)\\s+([A-Za-z_][A-Za-z0-9_]*)',
      name: 'meta.class.boo'
    },
    {
      captures: {
        1: {name: 'storage.modifier.boo'},
        3: {name: 'storage.type.function.boo'},
        4: {name: 'entity.name.function.boo'}
      },
      match:
        '^\\s*((static|private|protected|public|virtual|override|abstract|final)\\s+)*(def)\\s+([A-Za-z_][A-Za-z0-9_]*)',
      name: 'meta.function.boo'
    },
    {
      match:
        '\\b(assert|break|block|callable|case|class|continue|def|debug|else|elif|ensure|enum|event|except|for|from|get|goto|if|import|in|interface|lock|macro|match|namespace|new|of|otherwise|override|pass|raise|ref|return|self|set|struct|then|try|unless|unsafe|using|virtual|while|yield)\\b',
      name: 'keyword.control.boo'
    },
    {match: '\\b(and|or|not|is)\\b', name: 'keyword.operator.logical.boo'},
    {match: '\\b(isa|as|cast)\\b', name: 'keyword.operator.cast.boo'},
    {
      match: '<\\=|>\\=|\\=\\=|<|>|\\!\\=',
      name: 'keyword.operator.comparison.boo'
    },
    {
      match:
        '\\+\\=|-\\=|\\*\\=|/\\=|//\\=|%\\=|&\\=|\\|\\=|\\^\\=|>>\\=|<<\\=|\\*\\*\\=',
      name: 'keyword.operator.assignment.augmented.boo'
    },
    {
      match: '\\+|\\-|\\*|\\*\\*|\\b/\\b|%|<<|>>|&|\\||\\^|~',
      name: 'keyword.operator.arithmetic.boo'
    },
    {match: '\\=', name: 'keyword.operator.assignment.boo'},
    {match: '(\\(|\\)|\\[|\\]|{|})', name: 'punctuation.boo'},
    {begin: '(#|//)', end: '\\n', name: 'comment.line.boo'},
    {begin: '/\\*', end: '\\*/', name: 'comment.block.boo'},
    {match: '\\b\\d+(\\.\\d+)?(f|F|L)?\\b', name: 'constant.numeric.boo'},
    {match: '\\b(true|false|null|value)\\b', name: 'constant.language.boo'},
    {begin: "'", end: "'", name: 'string.quoted.single.boo'},
    {begin: '"', end: '"', name: 'string.quoted.double.boo'},
    {begin: '"""', end: '"""', name: 'string.quoted.triple.boo'},
    {begin: '`', end: '`', name: 'string.quoted.backtick.boo'},
    {
      match:
        '\\b(bool|byte|char|date|decimal|double|duck|int|long|object|sbyte|short|single|string|uint|ulong|ushort)\\b',
      name: 'storage.type.boo'
    },
    {
      match:
        '\\b(public|protected|internal|private|abstract|final|static|partial)\\b',
      name: 'storage.modifier.boo'
    },
    {match: '\\b(self|super)\\b', name: 'variable.language.boo'},
    {
      match:
        '\\b(print|gets|prompt|join|map|array|len|matrix|iterator|shellp|shell|shellm|enemurate|range|reversed|zip|cat|typeof|sizeof)\\b',
      name: 'support.function.builtin.boo'
    },
    {
      captures: {
        1: {name: 'variable.parameter.boo'},
        2: {name: 'keyword.operator.cast.boo'},
        3: {name: 'storage.type.boo'}
      },
      match: '\\b([a-z_]+[A-Za-z0-9_]*(\\s+as\\s+([A-Za-z0-9_]+)))\\b'
    },
    {match: '\\b[a-z_]+[A-Za-z_0-9]*\\b', name: 'variable.boo'}
  ],
  scopeName: 'source.boo'
}

export default grammar
