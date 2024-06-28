// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/chapel-lang/chapel-tmbundle>
// and licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.chpl'],
  names: ['chapel', 'chpl'],
  patterns: [
    {include: '#comments'},
    {
      match:
        '\\b(align|as|atomic|begin|borrowed|break|by|catch|class|cobegin|coforall|continue|defer|delete|dmapped|do|else|enum|except|export|extern|for|forall|foreach|forwarding|if|import|in|index|inline|inout|iter|label|lambda|let|lifetime|local|manage|module|new|noinit|on|only|operator|otherwise|out|override|owned|pragma|private|proc|prototype|public|record|reduce|require|return|scan|select|serial|shared|sync|then|throw|throws|try|union|unmanaged|use|when|where|while|with|yield|zip)\\b',
      name: 'keyword.control.chapel'
    },
    {
      match:
        '\\b(bool|bytes|complex|dmap|domain|imag|int|nothing|opaque|range|real|string|subdomain|tuple|uint|void)\\b',
      name: 'storage.type.chapel'
    },
    {
      match:
        '\\b(borrowed|config|const|enum|owned|param|private|public|ref|single|shared|sparse|sync|type|unmanaged|var)\\b',
      name: 'storage.modifier.chapel'
    },
    {match: '\\b(true|false|nil)\\b', name: 'constant.language.chapel'},
    {
      match:
        '\\b((0(b|B)[0-1]([0-1]|_)*)|(0(o|O)[0-7]([0-7]|_)*)|(0(x|X)((([0-9a-fA-F]([0-9a-fA-F]|_)*\\.?([0-9a-fA-F]([0-9a-fA-F]|_)*)?)|(\\.[0-9a-fA-F]([0-9a-fA-F]|_)*))((p|P)(\\+|-)?[0-9]([0-9]|_)*)?))|(0(x|X)[0-9a-fA-F]([0-9a-fA-F]|_)*)|((([0-9]([0-9]|_)*\\.?([0-9]([0-9]|_)*)?)|(\\.[0-9]([0-9]|_)*))((e|E)(\\+|-)?[0-9]([0-9]|_)*)?))\\b',
      name: 'constant.numeric.chapel'
    },
    {
      match:
        '\\b(FileAccessMode|here|LocaleSpace|Locales|locale|numLocales|super|these|this)\\b',
      name: 'variable.language.chapel'
    },
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.chapel'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.chapel'}},
      name: 'string.quoted.double.chapel',
      patterns: [
        {include: '#string_escaped_char'},
        {include: '#string_placeholder'}
      ]
    },
    {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.chapel'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.chapel'}},
      name: 'string.quoted.single.chapel',
      patterns: [
        {include: '#string_escaped_char'},
        {include: '#string_placeholder'}
      ]
    },
    {
      match: '<\\=|>\\=|\\=\\=|<|>|\\!\\=',
      name: 'keyword.operator.comparison.chapel'
    },
    {
      match:
        '\\+\\=|-\\=|\\*\\=|/\\=|//\\=|%\\=|&\\=|\\|\\=|\\^\\=|>>\\=|<<\\=|\\*\\*\\=',
      name: 'keyword.operator.assignment.augmented.chapel'
    },
    {
      match: '\\+|\\-|\\*|\\*\\*|/|//|%|<<|>>|&|\\||\\^|~|<\\=>\\\\.\\.\\.',
      name: 'keyword.operator.arithmetic.chapel'
    },
    {match: '\\=', name: 'keyword.operator.assignment.chapel'},
    {match: ':', name: 'keyword.operator.others.chapel'},
    {match: '\\[|\\]', name: 'keyword.operator.domain.chapel'},
    {
      begin: '^\\s*(proc)\\s+(?=[A-Za-z_][A-Za-z0-9_]*)',
      beginCaptures: {1: {name: 'keyword.control.chapel'}},
      end: '(\\()|\\s*($\\n?|#.*$\\n?)',
      name: 'meta.function.chapel',
      patterns: [
        {
          begin: '(?=[A-Za-z_][A-Za-z0-9_]*)',
          contentName: 'entity.name.function.chapel',
          end: '(?![A-Za-z0-9_])'
        },
        {contentName: 'keyword.control.chapel', match: 'proc'},
        {
          begin: '(\\()',
          contentName: 'meta.function.parameters.chapel',
          end: '(?=\\)).*\\{',
          patterns: [
            {
              captures: {1: {name: 'variable.parameter.function.chapel'}},
              match: '\\b([a-zA-Z_][a-zA-Z_0-9]*)'
            }
          ]
        }
      ]
    },
    {
      begin: '(?=[A-Za-z_][A-Za-z0-9_]*(?:\\.[a-zA-Z_][a-zA-Z_0-9]*)*\\s*\\()',
      end: '(\\))',
      name: 'meta.function-call.chapel',
      patterns: [
        {
          begin:
            '(?=[A-Za-z_][A-Za-z0-9_]*(?:\\.[A-Za-z_][A-Za-z0-9_]*)*\\s*\\()',
          end: '(?=\\s*\\()',
          patterns: [{include: '#builtin_functions'}]
        },
        {
          begin: '(\\()',
          beginCaptures: {
            1: {name: 'punctuation.definition.arguments.begin.chapel'}
          },
          contentName: 'meta.function-call.arguments.chapel',
          end: '(?=\\))',
          patterns: [{include: '$self'}]
        }
      ]
    }
  ],
  repository: {
    builtin_functions: {
      match:
        '(?x)\\b(\n              \t abs | close | exit| max | min | open | read | readln | sqrt | write | writeln\n\t\t\t\n\t\t\t)\\b',
      name: 'support.function.builtin.chapel'
    },
    comments: {
      patterns: [
        {
          captures: {1: {name: 'meta.toc-list.banner.block.c'}},
          match: '^/\\* =(\\s*.*?)\\s*= \\*/$\\n?',
          name: 'comment.block.chapel'
        },
        {
          begin: '/\\*',
          captures: {0: {name: 'punctuation.definition.comment.c'}},
          end: '\\*/',
          name: 'comment.block.chapel'
        },
        {match: '\\*/.*\\n', name: 'invalid.illegal.stray-comment-end.c'},
        {
          captures: {1: {name: 'meta.toc-list.banner.line.c'}},
          match: '^// =(\\s*.*?)\\s*=\\s*$\\n?',
          name: 'comment.line.banner.c++'
        },
        {
          begin: '//',
          beginCaptures: {0: {name: 'punctuation.definition.comment.c'}},
          end: '$\\n?',
          name: 'comment.line.double-slash.c++',
          patterns: [
            {
              match: '(?>\\\\\\s*\\n)',
              name: 'punctuation.separator.continuation.c++'
            }
          ]
        }
      ]
    },
    entity_name_function: {
      patterns: [{include: '#illegal_names'}, {include: '#generic_names'}]
    },
    generic_names: {match: '[A-Za-z_][A-Za-z0-9_]*'},
    illegal_names: {
      match:
        '\\b(align|as|atomic|begin|borrowed|break|by|bytes|catch|class|cobegin|coforall|continue|defer|delete|dmapped|do|else|enum|except|export|extern|for|forall|foreach|forwarding|if|import|in|index|inline|inout|iter|label|lambda|let|lifetime|local|manage|module|new|noinit|nothing|on|only|operator|otherwise|out|override|owned|pragma|private|proc|public|record|reduce|ref|require|return|scan|select|serial|shared|single|sync|then|throw|throws|try|union|unmanaged|use|var|void|when|where|while|with|yield|zip)\\b',
      name: 'invalid.illegal.name.chapel'
    },
    string_escaped_char: {
      patterns: [
        {
          match:
            '\\\\(\\\\|[abefnprtv\'"?]|[0-3]\\d{0,2}|[4-7]\\d?|x[a-fA-F0-9]{0,2}|u[a-fA-F0-9]{0,4}|U[a-fA-F0-9]{0,8})',
          name: 'constant.character.escape.c'
        },
        {match: '\\\\.', name: 'invalid.illegal.unknown-escape.c'}
      ]
    },
    string_placeholder: {
      patterns: [
        {
          match:
            "(?x)%\n    \t\t\t\t\t\t(\\d+\\$)?                             # field (argument #)\n    \t\t\t\t\t\t[#0\\- +']*                           # flags\n    \t\t\t\t\t\t[,;:_]?                              # separator character (AltiVec)\n    \t\t\t\t\t\t((-?\\d+)|\\*(-?\\d+\\$)?)?              # minimum field width\n    \t\t\t\t\t\t(\\.((-?\\d+)|\\*(-?\\d+\\$)?)?)?         # precision\n    \t\t\t\t\t\t(hh|h|ll|l|j|t|z|q|L|vh|vl|v|hv|hl)? # length modifier\n    \t\t\t\t\t\t[diouxXDOUeEfFgGaACcSspn%]           # conversion type\n    \t\t\t\t\t",
          name: 'constant.other.placeholder.c'
        }
      ]
    }
  },
  scopeName: 'source.chapel'
}

export default grammar
