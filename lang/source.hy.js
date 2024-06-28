// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/tshakalekholoane/vscode-hy>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.hy'],
  names: ['hy', 'hylang'],
  patterns: [
    {include: '#comment'},
    {include: '#shebang'},
    {include: '#quoted-sexp'},
    {include: '#sexp'},
    {include: '#keyfn'},
    {include: '#string'},
    {include: '#vector'},
    {include: '#set'},
    {include: '#map'},
    {include: '#regexp'},
    {include: '#var'},
    {include: '#constants'},
    {include: '#dynamic-variables'},
    {include: '#metadata'},
    {include: '#namespace-symbol'},
    {include: '#symbol'}
  ],
  repository: {
    comment: {
      begin: '(?<!\\\\);(;{1,3})?',
      beginCaptures: {0: {name: 'punctuation.definition.comment.hy'}},
      end: '$',
      name: 'comment.line.semicolon.hy',
      patterns: [
        {
          match: '(?<=;)\\s+\\K(TODO|FIXME|XXX|BUG|HACK|NOTE):',
          name: 'keyword.codetag.hy'
        }
      ]
    },
    constants: {
      patterns: [
        {
          match: '(None)(?=(\\s|\\)|\\]|\\}))',
          name: 'constant.language.null.hy'
        },
        {match: '(True|False)', name: 'constant.language.boolean.hy'},
        {match: '(-?\\d+/\\d+)', name: 'constant.numeric.fraction.hy'},
        {
          match: '(-?0[xX][0-9a-fA-F]+)',
          name: 'constant.numeric.hexadecimal.hy'
        },
        {match: '(-?0[oO][0-7]+)', name: 'constant.numeric.octal.hy'},
        {
          match: '(-?\\d+\\.\\d+([eE][+-]?\\d+)?)',
          name: 'constant.numeric.float.hy'
        },
        {
          match:
            '((-?\\d+(\\.(\\d+([eE][+-]?\\d+)?)?)?)[+-](\\d+(\\.(\\d+([eE][+-]?\\d+)?)?)?)?[jJ])',
          name: 'constant.numeric.complex.hy'
        },
        {match: '(-?\\d+)', name: 'constant.numeric.int.hy'},
        {include: '#keyword'}
      ]
    },
    'dynamic-variables': {
      match: '\\*[\\w\\.\\-\\_\\:\\+\\=\\>\\<\\!\\?\\d]+\\*',
      name: 'meta.symbol.dynamic.hy'
    },
    keyfn: {
      patterns: [
        {
          match:
            '(?<=(\\s|\\(|\\[|\\{))(break|continue)|((if|set[vx])(-[-\\p{Ll}\\?]*)?|(unless|when|while|[dgls]?for)(-[-\\p{Ll}]*)?|cond|do|fn(/a)?|raise[\\p{Ll}\\-]*|try|except|finally|return|yield)(?=(\\s|\\)|\\]|\\}))',
          name: 'keyword.control.hy'
        },
        {
          match:
            '(?<=(\\s|\\(|\\[|\\{))(and|cmp|not|or|xor)(?=(\\s|\\)|\\]|\\}))',
          name: 'keyword.operator.hy'
        },
        {
          match:
            '^#@(?=\\()|(?<=(\\s|\\(|\\[|\\{))(\\.\\s|__\\p{Ll}+__|(as)?->>?|as(sert)?|async|await|def(class|n(/a)?|main|macro(/g\\!|\\!)?|tag)|del|doto|eval-(and|when)-compile|gensym|in|import|pys?|quasiquote|quote|require|unquote(-splice)?|with(-decorator|-gensyms|/a)?|yield-from)(?=(\\s|\\)|\\]|\\}))',
          name: 'keyword.other.hy'
        },
        {
          match: '(?<=(\\s|\\(|\\[|\\{))(global|nonlocal)(?=(\\s|\\)|\\]|\\}))',
          name: 'storage.modifier.hy'
        }
      ]
    },
    keyword: {
      match:
        '(?<=(\\s|\\(|\\[|\\{)):[\\w\\#\\.\\-\\_\\:\\+\\=\\>\\<\\/\\!\\?\\*]+(?=(\\s|\\)|\\]|\\}|\\,))',
      name: 'constant.keyword.hy'
    },
    map: {
      begin: '(\\{)',
      beginCaptures: {1: {name: 'punctuation.section.map.begin.hy'}},
      end: '(\\}(?=[\\}\\]\\)\\s]*(?:;|$)))|(\\})',
      endCaptures: {
        1: {name: 'punctuation.section.map.end.trailing.hy'},
        2: {name: 'punctuation.section.map.end.hy'}
      },
      name: 'meta.map.hy',
      patterns: [{include: '$self'}]
    },
    metadata: {
      patterns: [
        {
          begin: '(\\^\\{)',
          beginCaptures: {
            1: {name: 'punctuation.section.metadata.map.begin.hy'}
          },
          end: '(\\}(?=[\\}\\]\\)\\s]*(?:;|$)))|(\\})',
          endCaptures: {
            1: {name: 'punctuation.section.metadata.map.end.trailing.hy'},
            2: {name: 'punctuation.section.metadata.map.end.hy'}
          },
          name: 'meta.metadata.map.hy',
          patterns: [{include: '$self'}]
        },
        {
          begin: '(\\^)',
          end: '(\\s)',
          name: 'meta.metadata.simple.hy',
          patterns: [{include: '#keyword'}, {include: '$self'}]
        }
      ]
    },
    'namespace-symbol': {
      patterns: [
        {
          captures: {1: {name: 'meta.symbol.namespace.hy'}},
          match:
            '([\\p{L}\\.\\-\\_\\+\\=\\>\\<\\!\\?\\*][\\w\\.\\-\\_\\:\\+\\=\\>\\<\\!\\?\\*\\d]*)/'
        }
      ]
    },
    'quoted-sexp': {
      begin: "(['`]\\()",
      beginCaptures: {1: {name: 'punctuation.section.expression.begin.hy'}},
      end: '(\\))$|(\\)(?=[\\}\\]\\)\\s]*(?:;|$)))|(\\))',
      endCaptures: {
        1: {name: 'punctuation.section.expression.end.trailing.hy'},
        2: {name: 'punctuation.section.expression.end.trailing.hy'},
        3: {name: 'punctuation.section.expression.end.hy'}
      },
      name: 'meta.quoted-expression.hy',
      patterns: [{include: '$self'}]
    },
    regexp: {
      begin: '#"',
      beginCaptures: {0: {name: 'punctuation.definition.regexp.begin.hy'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.regexp.end.hy'}},
      name: 'string.regexp.hy',
      patterns: [{include: '#regexp_escaped_char'}]
    },
    regexp_escaped_char: {match: '\\\\.', name: 'constant.character.escape.hy'},
    set: {
      begin: '(\\#\\{)',
      beginCaptures: {1: {name: 'punctuation.section.set.begin.hy'}},
      end: '(\\}(?=[\\}\\]\\)\\s]*(?:;|$)))|(\\})',
      endCaptures: {
        1: {name: 'punctuation.section.set.end.trailing.hy'},
        2: {name: 'punctuation.section.set.end.hy'}
      },
      name: 'meta.set.hy',
      patterns: [{include: '$self'}]
    },
    sexp: {
      begin: '(\\()',
      beginCaptures: {1: {name: 'punctuation.section.expression.begin.hy'}},
      end: '(\\))$|(\\)(?=[\\}\\]\\)\\s]*(?:;|$)))|(\\))',
      endCaptures: {
        1: {name: 'punctuation.section.expression.end.trailing.hy'},
        2: {name: 'punctuation.section.expression.end.trailing.hy'},
        3: {name: 'punctuation.section.expression.end.hy'}
      },
      name: 'meta.expression.hy',
      patterns: [
        {
          begin:
            '(?<=\\()(set[vx]|def[\\w\\d._:+=><!?*-]*|[\\w._:+=><!?*-][\\w\\d._:+=><!?*-]*/def[\\w\\d._:+=><!?*-]*)\\s+',
          beginCaptures: {1: {name: 'keyword.control.hy'}},
          end: '(?=\\))',
          name: 'meta.definition.global.hy',
          patterns: [
            {include: '#metadata'},
            {include: '#dynamic-variables'},
            {
              match:
                '([\\p{L}\\.\\-\\_\\+\\=\\>\\<\\!\\?\\*][\\w\\.\\-\\_\\:\\+\\=\\>\\<\\!\\?\\*\\d]*)',
              name: 'entity.global.hy'
            },
            {include: '$self'}
          ]
        },
        {include: '#keyfn'},
        {include: '#constants'},
        {include: '#vector'},
        {include: '#map'},
        {include: '#set'},
        {include: '#sexp'},
        {
          captures: {1: {name: 'entity.name.function.hy'}},
          match: '(?<=\\()(.+?)(?=\\s|\\))',
          patterns: [{include: '$self'}]
        },
        {include: '$self'}
      ]
    },
    shebang: {
      begin: '^(#!)',
      beginCaptures: {1: {name: 'punctuation.definition.comment.shebang.hy'}},
      end: '$',
      name: 'comment.line.shebang.hy'
    },
    string: {
      patterns: [
        {
          begin: '(?<!\\\\)(")',
          beginCaptures: {1: {name: 'punctuation.definition.string.begin.hy'}},
          end: '(")',
          endCaptures: {1: {name: 'punctuation.definition.string.end.hy'}},
          name: 'string.quoted.double.hy',
          patterns: [{match: '\\\\.', name: 'constant.character.escape.hy'}]
        },
        {
          begin: '(?<!\\\\)(\\#\\[\\[)',
          beginCaptures: {1: {name: 'punctuation.definition.string.begin.hy'}},
          end: '(\\]\\])',
          endCaptures: {1: {name: 'punctuation.definition.string.end.hy'}},
          name: 'string.quoted.bracket-string.hy'
        }
      ]
    },
    symbol: {
      patterns: [
        {
          match:
            '([\\p{L}\\.\\-\\_\\+\\=\\>\\<\\!\\?\\*][\\w\\.\\-\\_\\:\\+\\=\\>\\<\\!\\?\\*\\d]*)',
          name: 'meta.symbol.hy'
        }
      ]
    },
    var: {
      match:
        "(?<=(\\s|\\(|\\[|\\{)\\#)'[\\w\\.\\-\\_\\:\\+\\=\\>\\<\\/\\!\\?\\*]+(?=(\\s|\\)|\\]|\\}))",
      name: 'meta.var.hy'
    },
    vector: {
      begin: '(\\[)',
      beginCaptures: {1: {name: 'punctuation.section.vector.begin.hy'}},
      end: '(\\](?=[\\}\\]\\)\\s]*(?:;|$)))|(\\])',
      endCaptures: {
        1: {name: 'punctuation.section.vector.end.trailing.hy'},
        2: {name: 'punctuation.section.vector.end.hy'}
      },
      name: 'meta.vector.hy',
      patterns: [{include: '$self'}]
    }
  },
  scopeName: 'source.hy'
}

export default grammar
