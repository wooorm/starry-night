// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/usethesource/rascal-syntax-highlighting>
// and licensed `bsd-2-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.rsc'],
  names: ['rascal'],
  patterns: [{include: '#top_level'}],
  repository: {
    annotation: {
      patterns: [
        {
          begin: '(@[^ {]+)({)',
          beginCaptures: {
            1: {name: 'storage.type.annotation.block.rascal'},
            2: {name: 'punctuation.annotation-argument.begin.rascal'}
          },
          end: '(})',
          endCaptures: {
            1: {name: 'punctuation.annotation-argument.end.rascal'}
          },
          name: 'comment.block.annotation.rascal'
        },
        {
          captures: {1: {name: 'storage.type.annotation.inline.rascal'}},
          match: '(@[A-Za-z_0-9]+)',
          name: 'meta.annotation.inline.rascal'
        }
      ]
    },
    char_set: {
      patterns: [
        {
          begin: '\\[',
          end: '\\]',
          name: 'punctuation.other.lexicalcharset.rascal',
          patterns: [{include: '#string_escape'}]
        }
      ]
    },
    comment: {
      patterns: [
        {match: '//.*$\\n?', name: 'comment.line.double-slash.rascal'},
        {begin: '/\\*', end: '\\*/', name: 'comment.block.rascal'}
      ]
    },
    regex: {
      patterns: [
        {
          begin: '/(?!/|\\*)',
          end: '/([dims]*)',
          endCaptures: {1: {name: 'storage.modifier.regex.rascal'}},
          name: 'string.regexp.rascal',
          patterns: [
            {include: '#regex_escape'},
            {include: '#string_interpolation'}
          ]
        }
      ]
    },
    regex_escape: {
      patterns: [
        {
          match: '\\\\(/|<|>|\\\\)',
          name: 'constant.character.escape.regex.rascal'
        }
      ]
    },
    string: {
      patterns: [
        {
          begin: "'",
          end: "'",
          name: 'string.quoted.single.rascal',
          patterns: [{include: '#string_escape'}]
        },
        {
          begin: '"',
          end: '"',
          name: 'string.quoted.double.rascal',
          patterns: [
            {include: '#string_escape'},
            {include: '#string_interpolation'}
          ]
        },
        {
          begin: '`',
          end: '`',
          name: 'string.interpolated.rascal',
          patterns: [
            {include: '#string_interpolation'},
            {include: '#syntax_escape'}
          ]
        }
      ]
    },
    string_escape: {
      patterns: [
        {
          match: '\\\\(\\"|\\\'|<|>|\\\\|[bnfrt])',
          name: 'constant.character.escape.ordinary.rascal'
        },
        {
          match:
            '\\\\(u[0-9A-Fa-f][0-9A-Fa-f][0-9A-Fa-f][0-9A-Fa-f] |U(0[0-9 A-F a-f]|10)[0-9A-Fa-f][0-9A-Fa-f][0-9A-Fa-f][0-9A-Fa-f] |a[0-7][0-9A-Fa-f] )',
          name: 'constant.character.escape.unicode.rascal'
        }
      ]
    },
    string_interpolation: {
      patterns: [
        {
          begin: '(<)',
          beginCaptures: {1: {name: 'punctuation.interpolation.begin.rascal'}},
          end: '(>)',
          endCaptures: {2: {name: 'punctuation.interpolation.end.rascal'}},
          name: 'support.interpolated-string.rascal',
          patterns: [{include: '#top_level'}]
        }
      ]
    },
    syntax_escape: {
      patterns: [
        {
          match: '\\\\(\\\\|<|>|`)',
          name: 'constant.character.escape.syntax.rascal'
        }
      ]
    },
    top_level: {
      patterns: [
        {
          begin: '(lexical|syntax)\\s+([a-zA-Z][A-Za-z_0-9]*)',
          captures: {
            1: {name: 'keyword.control.rascal'},
            2: {name: 'entity.name.type.rascal'}
          },
          end: ';',
          name: 'punctuation.other.syntactic.rascal',
          patterns: [
            {include: '#char_set'},
            {include: '#string'},
            {include: '#comment'},
            {include: '#regex'},
            {include: '#annotation'}
          ]
        },
        {
          match:
            '(?<![A-Za-z_])(0(?![0-9a-z_A-Z])|[1-9][0-9]*(?![0-9a-z_A-Z]))',
          name: 'constant.numeric.decimal.rascal'
        },
        {
          match: '(?<![A-Za-z_])0[Xx][0-9A-Fa-f]+(?![0-9a-z_A-Z])',
          name: 'constant.numeric.hex.rascal'
        },
        {
          match: '(?<![A-Za-z_])0[0-7]+(?![0-9a-z_A-Z])',
          name: 'constant.numeric.octal.rascal'
        },
        {begin: '\\\\$', end: '\\\\$', name: 'string.other.datetime.rascal'},
        {
          match:
            '(?<![A-Za-z_]) ([0-9]+[dDfF] |[0-9]+[eE][+\\-]?[0-9]+[dDfF]? |[0-9]+\\.(?!\\.)[0-9]*[dDfF]? |[0-9]+\\.[0-9]*[eE][+\\-]?[0-9]+[dDfF]? |\\.(?!\\.)[0-9]+[dDfF]? |\\.(?!\\.)[0-9]+[eE][+\\-]?[0-9]+[dDfF]? )',
          name: 'constant.numeric.real.rascal'
        },
        {match: '\\b(true|false)\\b', name: 'constant.language.bool.rascal'},
        {
          match:
            '(?<![A-Za-z_])([0-9][0-9]*r|[1-9][0-9]*r[0-9][0-9]*(?![0-9a-z_A-Z]))',
          name: 'constant.numeric.rational.rascal'
        },
        {
          match:
            '\\b(syntax|keyword|lexical|break|continue|finally|private|fail|filter|if|tag|extend|append|non-assoc|assoc|test|anno|layout|data|join|it|bracket|in|import|all|solve|try|catch|notin|else|insert|switch|return|case|while|throws|visit|for|assert|default|map|alias|any|module|mod|public|one|throw|start)\\b',
          name: 'keyword.control.rascal'
        },
        {
          match:
            '\\b(value|loc|node|num|type|bag|int|rat|rel|lrel|real|tuple|str|bool|void|datetime|set|map|list)\\b',
          name: 'support.type.basic.rascal'
        },
        {include: '#string'},
        {include: '#regex'},
        {include: '#annotation'},
        {include: '#comment'},
        {
          match: '\\b[a-zA-Z][A-Za-z_0-9]*\\b',
          name: 'variable.other.ordinary.rascal'
        },
        {
          match:
            '\\\\(syntax|keyword|lexical|break|continue|finally|private|fail|filter|if|tag|extend|append|non-assoc|assoc|test|anno|layout|data|join|it|bracket|in|import|all|solve|try|catch|notin|else|insert|switch|return|case|while|throws|visit|for|assert|default|map|alias|any|module|mod|public|one|throw|start|value|loc|node|num|type|bag|int|rat|rel|lrel|real|tuple|str|bool|void|datetime|set|map|list)',
          name: 'variable.other.escaped-keyword.rascal'
        },
        {
          captures: {1: {name: 'markup.underline.link.rascal'}},
          match: "\\|([0-9a-z_A-Z.\\-_~:/?#\\[\\]@!$&'()*+,;=`])+\\|",
          name: 'string.other.url.rascal'
        }
      ]
    }
  },
  scopeName: 'source.rascal'
}

export default grammar
