// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/terrastruct/d2-vscode>
// and licensed `bsd-3-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.d2'],
  names: ['d2', 'd2lang'],
  patterns: [
    {include: '#block_comment'},
    {include: '#comment'},
    {include: '#semicolon'},
    {include: '#spread_substitution'},
    {include: '#spread_import'},
    {include: '#key_value'},
    {include: '#key'},
    {include: '#error'}
  ],
  repository: {
    array: {
      begin: '\\[',
      captures: {0: {name: 'punctuation.array.d2'}},
      end: '\\]',
      name: 'meta.array.d2',
      patterns: [
        {include: '#block_comment'},
        {include: '#comment'},
        {include: '#semicolon'},
        {include: '#substitution'},
        {include: '#import'},
        {include: '#spread_substitution'},
        {include: '#spread_import'},
        {include: '#value'},
        {include: '#error'}
      ]
    },
    block_comment: {
      patterns: [
        {
          begin: '"""',
          beginCaptures: {0: {name: 'punctuation.comment.start.d2'}},
          end: '"""',
          endCaptures: {0: {name: 'punctuation.comment.end.d2'}},
          name: 'comment.block.d2'
        }
      ]
    },
    boolean: {
      match: '(?:true|false)(?=\\s|\\n)',
      name: 'constant.language.boolean.d2'
    },
    comment: {match: '#.*$', name: 'comment.line.number-sign.d2'},
    debug: {
      patterns: [
        {match: '.*invalid\\.illegal.*', name: 'invalid.illegal'},
        {match: '.*punctuation.*', name: 'punctuation'},
        {match: '.*string.*', name: 'string'},
        {
          match: '.*constant\\.character\\.escape.*',
          name: 'constant.character.escape'
        },
        {match: '.*entity\\.name\\.tag.*', name: 'entity.name.tag'},
        {match: '.*keyword.*', name: 'keyword'},
        {match: '.*keyword\\.operator.*', name: 'keyword.operator'},
        {match: '.*constant\\.numeric.*', name: 'constant.numeric'},
        {
          match: '.*constant\\.language\\.boolean.*',
          name: 'constant.language.boolean'
        },
        {
          match: '.*constant\\.language\\.null.*',
          name: 'constant.language.null'
        },
        {match: '.*comment.*', name: 'comment'}
      ]
    },
    error: {match: '\\S[^;\\n]*', name: 'invalid.illegal.d2'},
    escape: {
      patterns: [
        {match: '\\\\U[[:xdigit:]]{8}', name: 'constant.character.escape.d2'},
        {match: '\\\\u[[:xdigit:]]{4}', name: 'constant.character.escape.d2'},
        {match: '\\\\[0-7]{3}', name: 'constant.character.escape.d2'},
        {match: '\\\\x[[:xdigit:]]{2}', name: 'constant.character.escape.d2'},
        {match: '\\\\.', name: 'constant.character.escape.d2'},
        {match: '\\\\\\n', name: 'constant.character.escape.d2'}
      ]
    },
    import: {
      begin: '@',
      captures: {0: {name: 'keyword.operator.import.d2'}},
      end: '(?=\\s*[\\n#;\\[\\]{}|$])',
      name: 'meta.operator.import.d2',
      patterns: [{include: '#key'}]
    },
    key: {
      patterns: [
        {
          begin: "'",
          captures: {0: {name: 'punctuation.quote.single.d2'}},
          contentName: 'entity.name.tag.quoted.single.d2',
          end: "'|(?=\\n)",
          name: 'meta.key.quoted.single.d2',
          patterns: [{include: '#escape'}]
        },
        {
          begin: '"',
          captures: {0: {name: 'punctuation.quote.double.d2'}},
          contentName: 'entity.name.tag.quoted.double.d2',
          end: '"|(?=\\n)',
          name: 'meta.key.quoted.double.d2',
          patterns: [{include: '#escape'}]
        },
        {
          begin: '\\(',
          captures: {0: {name: 'punctuation.parenthesis.d2'}},
          end: '\\)(?:\\[(?:[0-9_]+|\\*)\\])?',
          name: 'meta.key.group.d2',
          patterns: [{include: '#key'}, {include: '#error'}]
        },
        {
          match:
            '(?:grid\\-gap|vertical\\-gap|horizontal\\-gap|classes|direction|grid\\-columns|grid\\-rows|text\\-transform|shape|layers|steps|tooltip|font|bold|italic|underline|top|left|icon|constraint|near|opacity|stroke|fill\\-pattern|fill|filled|stroke\\-width|width|height|double\\-border|border\\-radius|source\\-arrowhead|target\\-arrowhead|link|stroke\\-dash|font\\-size|font\\-color|shadow|multiple|3d|animated|class|label|style|vars|scenarios|on_click|src|dst)(?=\\s*[\\n#;\\[\\]{}|$\'":.<>*&()]|-+-|-+>|-+\\*)',
          name: 'keyword.reserved.d2'
        },
        {match: '\\.', name: 'punctuation.period.d2'},
        {match: '\\*', name: 'keyword.operator.glob.d2'},
        {match: '\\*\\*', name: 'keyword.operator.double_glob.d2'},
        {match: '&', name: 'keyword.operator.ampersand.d2'},
        {match: '!&', name: 'keyword.operator.not_ampersand.d2'},
        {
          begin:
            '(?=[^[:space:]\\n#;\\[\\]{}|$\'":.<>*&()])(?!-+-)(?!-+>)(?!-+\\*)',
          end: '(?=\\s*[\\n#;\\[\\]{}|$:.<>*&()]|-+-|-+>|-+\\*)',
          name: 'entity.name.tag.unquoted.d2',
          patterns: [{include: '#escape'}]
        },
        {
          begin: '[\\-<>]+',
          captures: {0: {name: 'punctuation.edge.d2'}},
          end: '(?=[^\\-<>])',
          name: 'meta.key.edge.d2',
          patterns: [{include: '#line_continuation'}]
        }
      ]
    },
    key_value: {
      begin: ':',
      beginCaptures: {0: {name: 'punctuation.colon.d2'}},
      end: '(?=\\s*[\\n#;\\]}])',
      name: 'meta.key_value.d2',
      patterns: [{include: '#value'}, {include: '#error'}]
    },
    line_continuation: {match: '\\\\\\n', name: 'constant.character.escape.d2'},
    map: {
      begin: '\\{',
      captures: {0: {name: 'punctuation.map.d2'}},
      end: '\\}',
      name: 'meta.map.d2',
      patterns: [{include: '$self'}]
    },
    null: {match: 'null(?=\\s|\\n)', name: 'constant.language.null.d2'},
    number: {
      patterns: [
        {
          match:
            '[+-]?0[xX][[:xdigit:]_]*\\.?[[:xdigit:]_]*(?:[eEpP][+-]?[0-9_]*)?(?=\\s|\\n)',
          name: 'constant.numeric.hexadecimal.d2'
        },
        {
          match: '[+-]?0[bB][01_]*\\.?[01_]*(?:[eEpP][+-]?[0-9_]*)?(?=\\s|\\n)',
          name: 'constant.numeric.binary.d2'
        },
        {
          match: '[+-]?0[oO]?[0-7_]*\\.?[0-7_]*(?=\\s|\\n)',
          name: 'constant.numeric.octal.d2'
        },
        {
          match: '[+-]?[0-9_]+(?:[eEpP][+-]?[0-9_]*)?(?=\\s|\\n)',
          name: 'constant.numeric.decimal.d2'
        },
        {
          match: '[+-]?[0-9_]*\\.[0-9_]+(?:[eEpP][+-]?[0-9_]*)?(?=\\s|\\n)',
          name: 'constant.numeric.decimal.d2'
        }
      ]
    },
    semicolon: {match: ';', name: 'punctuation.semicolon.d2'},
    spread_import: {
      begin: '\\.\\.\\.@',
      captures: {0: {name: 'keyword.operator.import.d2'}},
      end: '(?=\\s*[\\n#;\\[\\]{}|$])',
      name: 'meta.operator.import.d2',
      patterns: [{include: '#key'}]
    },
    spread_substitution: {
      begin: '\\.\\.\\.\\$\\{',
      captures: {0: {name: 'keyword.operator.substitution.d2'}},
      end: '\\}',
      name: 'meta.operator.substitution.d2',
      patterns: [{include: '#key'}]
    },
    string: {
      patterns: [
        {
          begin: "'",
          captures: {0: {name: 'punctuation.quote.single.d2'}},
          contentName: 'string.quoted.single.d2',
          end: "'|(?=\\n)",
          name: 'meta.string.quoted.single.d2',
          patterns: [{include: '#escape'}]
        },
        {
          begin: '"',
          captures: {0: {name: 'punctuation.quote.double.d2'}},
          contentName: 'string.quoted.double.d2',
          end: '"|(?=\\n)',
          name: 'meta.string.quoted.double.d2',
          patterns: [{include: '#escape'}]
        },
        {
          begin: '\\|([^[:alnum:]]*)sh[\\n[:space:]]',
          captures: {0: {name: 'punctuation.block.d2'}},
          end: '\\1\\|',
          name: 'meta.string.block.shellscript.d2',
          patterns: [{include: 'source.shell'}]
        },
        {
          begin: '\\|([^[:alnum:]]*)md[\\n[:space:]]',
          captures: {0: {name: 'punctuation.block.d2'}},
          end: '\\1\\|',
          name: 'meta.string.block.markdown.d2',
          patterns: [{include: 'text.html.markdown.d2'}]
        },
        {
          begin: '\\|([^[:alnum:]]*)js[\\n[:space:]]',
          captures: {0: {name: 'punctuation.block.d2'}},
          end: '\\1\\|',
          name: 'meta.string.block.js.d2',
          patterns: [{include: 'source.js'}]
        },
        {
          begin: '\\|([^[:alnum:]]*)go[\\n[:space:]]',
          captures: {0: {name: 'punctuation.block.d2'}},
          end: '\\1\\|',
          name: 'meta.string.block.go.d2',
          patterns: [{include: 'source.go'}]
        },
        {
          begin: '\\|([^[:alnum:]]*)text[\\n[:space:]]',
          captures: {0: {name: 'punctuation.block.d2'}},
          end: '\\1\\|',
          name: 'meta.string.block.text.d2'
        },
        {
          begin: '\\|([^[:alnum:]]*)d2[\\n[:space:]]',
          captures: {0: {name: 'punctuation.block.d2'}},
          end: '\\1\\|',
          name: 'meta.string.block.d2.d2',
          patterns: [{include: 'source.d2'}]
        },
        {
          begin: '\\|([^[:alnum:]]*)[\\n[:space:]]',
          captures: {0: {name: 'punctuation.block.d2'}},
          end: '\\1\\|',
          name: 'meta.string.block.markdown.d2',
          patterns: [{include: 'text.html.markdown.d2'}]
        },
        {
          begin: '\\|([^[:alnum:]]*)[^[:space:]]+[\\n[:space:]]',
          captures: {0: {name: 'punctuation.block.d2'}},
          end: '\\1\\|',
          name: 'meta.string.block.d2'
        },
        {
          begin: '(?=[^[:space:]\\n#;\\[\\]{}|$\'"])',
          end: '(?=\\s*[\\n#;\\[\\]{}])',
          name: 'string.unquoted.d2',
          patterns: [{include: '#escape'}]
        }
      ]
    },
    substitution: {
      begin: '\\$\\{',
      captures: {0: {name: 'keyword.operator.substitution.d2'}},
      end: '\\}',
      name: 'meta.operator.substitution.d2',
      patterns: [{include: '#key'}]
    },
    value: {
      patterns: [
        {include: '#boolean'},
        {include: '#null'},
        {include: '#number'},
        {include: '#substitution'},
        {include: '#import'},
        {include: '#array'},
        {include: '#map'},
        {include: '#string'}
      ]
    }
  },
  scopeName: 'source.d2'
}

export default grammar
