// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/atom/language-yaml>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: [
    '.anim',
    '.asset',
    '.ksy',
    '.lkml',
    '.lookml',
    '.mat',
    '.meta',
    '.mir',
    '.prefab',
    '.raml',
    '.reek',
    '.rviz',
    '.sublime-syntax',
    '.syntax',
    '.unity',
    '.yaml-tmlanguage',
    '.yaml.sed',
    '.yml.mysql'
  ],
  names: [
    'jar-manifest',
    'kaitai-struct',
    'ksy',
    'lookml',
    'oasv2-yaml',
    'oasv3-yaml',
    'raml',
    'unity3d-asset',
    'yaml',
    'yml'
  ],
  patterns: [
    {include: '#erb'},
    {include: '#comment'},
    {match: '\\t+', name: 'invalid.illegal.whitespace.yaml'},
    {match: '^---', name: 'punctuation.definition.directives.end.yaml'},
    {match: '^\\.\\.\\.', name: 'punctuation.definition.document.end.yaml'},
    {
      begin:
        '^(\\s*)(?:(-)|(?:(?:(-)(\\s*))?([^!@#%&*>,][^:#]*\\S)\\s*(:)))(?:\\s+((!)[^!\\s]+))?\\s+(?=\\||>)',
      beginCaptures: {
        2: {name: 'punctuation.definition.entry.yaml'},
        3: {name: 'punctuation.definition.entry.yaml'},
        5: {name: 'entity.name.tag.yaml'},
        6: {name: 'punctuation.separator.key-value.yaml'},
        7: {name: 'keyword.other.tag.local.yaml'},
        8: {name: 'punctuation.definition.tag.local.yaml'}
      },
      contentName: 'string.unquoted.block.yaml',
      end: '^((?!$)(?!\\1\\s+)|(?=\\s\\4(-|[^\\s!@#%&*>,].*:\\s+)))',
      patterns: [
        {begin: '\\G', end: '$', patterns: [{include: '#comment'}]},
        {include: '#constants'},
        {include: '#erb'}
      ]
    },
    {
      begin:
        '^(\\s*)([^!@#%&*>,][^:#]*\\S)\\s*(:)(?:\\s+((!)[^!\\s]+))?\\s+(?=\\||>)',
      beginCaptures: {
        2: {name: 'entity.name.tag.yaml'},
        3: {name: 'punctuation.separator.key-value.yaml'},
        4: {name: 'keyword.other.tag.local.yaml'},
        5: {name: 'punctuation.definition.tag.local.yaml'}
      },
      contentName: 'string.unquoted.block.yaml',
      end: '^(?!$)(?!\\1\\s+)',
      patterns: [
        {begin: '\\G', end: '$', patterns: [{include: '#comment'}]},
        {include: '#constants'},
        {include: '#erb'}
      ]
    },
    {
      captures: {
        1: {name: 'entity.name.tag.merge.yaml'},
        2: {name: 'punctuation.separator.key-value.yaml'},
        3: {patterns: [{include: '#variables'}]}
      },
      match: '(<<)\\s*(:)\\s+(.+)$'
    },
    {
      begin: '(?>^(\\s*)(-)?\\s*)([^!{@#%&*>,\'"][^#]*?)(:)\\s+((!!)omap)?',
      beginCaptures: {
        2: {name: 'punctuation.definition.entry.yaml'},
        3: {name: 'entity.name.tag.yaml'},
        4: {name: 'punctuation.separator.key-value.yaml'},
        5: {name: 'keyword.other.omap.yaml'},
        6: {name: 'punctuation.definition.tag.omap.yaml'}
      },
      end: '^((?!\\1\\s+)|(?=\\1\\s*(-|[^!@#%&*>,].*:\\s+|#)))',
      patterns: [{include: '#scalar-content'}]
    },
    {
      begin:
        '^(\\s*)(-)?\\s*(?:((\')([^\']*?)(\'))|((")([^"]*?)(")))(:)\\s+((!!)omap)?',
      beginCaptures: {
        10: {name: 'punctuation.definition.string.end.yaml'},
        11: {name: 'punctuation.separator.key-value.yaml'},
        12: {name: 'keyword.other.omap.yaml'},
        13: {name: 'punctuation.definition.tag.omap.yaml'},
        2: {name: 'punctuation.definition.entry.yaml'},
        3: {name: 'string.quoted.single.yaml'},
        4: {name: 'punctuation.definition.string.begin.yaml'},
        5: {name: 'entity.name.tag.yaml'},
        6: {name: 'punctuation.definition.string.end.yaml'},
        7: {name: 'string.quoted.double.yaml'},
        8: {name: 'punctuation.definition.string.begin.yaml'},
        9: {name: 'entity.name.tag.yaml'}
      },
      end: '^((?!\\1\\s+)|(?=\\1\\s*(-|[^!@#%&*>,].*:\\s+|#)))',
      patterns: [{include: '#scalar-content'}]
    },
    {
      begin: '^(\\s*)(-)\\s+(?:((!!)omap)|((!)[^!\\s]+)|(?![!@#%&*>,]))',
      beginCaptures: {
        2: {name: 'punctuation.definition.entry.yaml'},
        3: {name: 'keyword.other.omap.yaml'},
        4: {name: 'punctuation.definition.tag.omap.yaml'},
        5: {name: 'keyword.other.tag.local.yaml'},
        6: {name: 'punctuation.definition.tag.local.yaml'}
      },
      end: '^((?!\\1\\s+)|(?=\\1\\s*(-|[^!@#%&*>,].*:\\s+|#)))',
      patterns: [{include: '#scalar-content'}]
    },
    {include: '#variables'},
    {include: '#strings'}
  ],
  repository: {
    comment: {
      begin: '(?<=^|\\s)#(?!{)',
      beginCaptures: {0: {name: 'punctuation.definition.comment.yaml'}},
      end: '$',
      name: 'comment.line.number-sign.yaml'
    },
    constants: {
      match:
        '(?<=\\s)(true|false|null|True|False|Null|TRUE|FALSE|NULL|~)(?=\\s*$)',
      name: 'constant.language.yaml'
    },
    date: {
      captures: {1: {name: 'constant.other.date.yaml'}},
      match: '([0-9]{4}-[0-9]{2}-[0-9]{2})\\s*($|(?=#)(?!#{))'
    },
    erb: {
      begin: '<%+(?!>)=?',
      beginCaptures: {0: {name: 'punctuation.definition.embedded.begin.ruby'}},
      contentName: 'source.ruby.rails',
      end: '(%)>',
      endCaptures: {
        0: {name: 'punctuation.definition.embedded.end.ruby'},
        1: {name: 'source.ruby.rails'}
      },
      name: 'meta.embedded.line.ruby',
      patterns: [
        {
          captures: {1: {name: 'punctuation.definition.comment.ruby'}},
          match: '(#).*?(?=%>)',
          name: 'comment.line.number-sign.ruby'
        }
      ]
    },
    escaped_char: {
      patterns: [
        {match: '\\\\u[A-Fa-f0-9]{4}', name: 'constant.character.escape.yaml'},
        {match: '\\\\U[A-Fa-f0-9]{8}', name: 'constant.character.escape.yaml'},
        {match: '\\\\x[0-9A-Fa-f]{2}', name: 'constant.character.escape.yaml'},
        {
          match: '\\\\[0abtnvfre "/\\\\N_LP]',
          name: 'constant.character.escape.yaml'
        },
        {
          match: '\\\\(u.{4}|U.{8}|x.{2}|.)',
          name: 'invalid.illegal.escape.yaml'
        }
      ]
    },
    numeric: {
      patterns: [
        {
          match: '[-+]?[0-9]+(?=\\s*($|#(?!#{)))',
          name: 'constant.numeric.integer.yaml'
        },
        {
          match: '0o[0-7]+(?=\\s*($|#(?!#{)))',
          name: 'constant.numeric.octal.yaml'
        },
        {
          match: '0x[0-9a-fA-F]+(?=\\s*($|#(?!#{)))',
          name: 'constant.numeric.hexadecimal.yaml'
        },
        {
          match:
            '[-+]?(.[0-9]+|[0-9]+(.[0-9]*)?)([eE][-+]?[0-9]+)?(?=\\s*($|#(?!#{)))',
          name: 'constant.numeric.float.yaml'
        },
        {
          match: '[-+]?(.inf|.Inf|.INF)(?=\\s*($|#(?!#{)))',
          name: 'constant.numeric.float.yaml'
        },
        {
          match: '(.nan|.NaN|.NAN)(?=\\s*($|#(?!#{)))',
          name: 'constant.numeric.float.yaml'
        }
      ]
    },
    'scalar-content': {
      patterns: [
        {include: '#comment'},
        {
          match: '!(?=\\s)',
          name: 'punctuation.definition.tag.non-specific.yaml'
        },
        {include: '#constants'},
        {include: '#date'},
        {include: '#numeric'},
        {include: '#strings'}
      ]
    },
    strings: {
      patterns: [
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.yaml'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.yaml'}},
          name: 'string.quoted.double.yaml',
          patterns: [{include: '#escaped_char'}, {include: '#erb'}]
        },
        {
          applyEndPatternLast: true,
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.yaml'}
          },
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.yaml'}},
          name: 'string.quoted.single.yaml',
          patterns: [
            {match: "''", name: 'constant.character.escape.yaml'},
            {include: '#erb'}
          ]
        },
        {
          begin: '`',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.yaml'}
          },
          end: '`',
          endCaptures: {0: {name: 'punctuation.definition.string.end.yaml'}},
          name: 'string.interpolated.yaml',
          patterns: [{include: '#escaped_char'}, {include: '#erb'}]
        },
        {
          match: '[^\\s"\'\\n](?!\\s*#(?!{))([^#\\n]|((?<!\\s)#))*',
          name: 'string.unquoted.yaml'
        }
      ]
    },
    variables: {
      captures: {1: {name: 'punctuation.definition.variable.yaml'}},
      match: '(&|\\*)\\w+$',
      name: 'variable.other.yaml'
    }
  },
  scopeName: 'source.yaml'
}

export default grammar
