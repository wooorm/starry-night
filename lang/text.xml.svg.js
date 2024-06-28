// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Alhadis/language-etc>
// and licensed `isc`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['text.xml'],
  extensions: ['.svg'],
  injections: {
    'R:meta.attribute.d.xml.svg string': {patterns: [{include: '#commands'}]}
  },
  names: ['svg'],
  patterns: [{include: '#main'}],
  repository: {
    attr: {
      begin: '[A-Za-z_:][-\\w.:]*',
      beginCaptures: {0: {patterns: [{include: '#attrName'}]}},
      end: '(?=\\s*(?:/?>|[^\\s=]))|(?<=["\'])',
      name: 'meta.attribute.${0:/downcase}.xml.svg',
      patterns: [{include: '#attrValueCSS'}, {include: '#attrValuePlain'}]
    },
    attrName: {
      patterns: [
        {
          captures: {
            1: {name: 'entity.other.attribute-name.namespace.xml.svg'},
            2: {name: 'punctuation.separator.namespace.xml.svg'}
          },
          match: '(?:^|\\G)([-\\w.]+)(:)(?=[-\\w.:])'
        },
        {
          match: '[A-Za-z_:][-\\w.:]*',
          name: 'entity.other.attribute-name.localname.xml.svg'
        }
      ]
    },
    attrValueCSS: {
      begin: '(?i)(?<=style)\\G\\s*(=)',
      beginCaptures: {1: {name: 'punctuation.separator.key-value.xml.svg'}},
      end: '(?=\\s*(?:[%?/]?>))|(?<=["\'])([^\\s>]*)|(?:\\G|^)\\s*([^\\s"\'>]+)',
      endCaptures: {
        1: {name: 'invalid.illegal.syntax.xml.svg'},
        2: {
          name: 'string.unquoted.xml.svg',
          patterns: [{include: 'source.css#rule-list-innards'}]
        }
      },
      patterns: [
        {match: '(?:\\G|^)\\s+(?!/?>)'},
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.xml.svg'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.xml.svg'}},
          name: 'string.quoted.double.xml.svg',
          patterns: [
            {
              captures: {
                0: {
                  patterns: [
                    {include: '#entity'},
                    {include: 'source.css#rule-list-innards'}
                  ]
                }
              },
              match: '[^"]+',
              name: 'source.css.style.xml.svg'
            }
          ]
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.xml.svg'}
          },
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.xml.svg'}},
          name: 'string.quoted.single.xml.svg',
          patterns: [
            {
              captures: {
                0: {
                  patterns: [
                    {include: '#entity'},
                    {include: 'source.css#rule-list-innards'}
                  ]
                }
              },
              match: "[^']+",
              name: 'source.css.style.xml.svg'
            }
          ]
        }
      ]
    },
    attrValuePlain: {
      begin: '\\s*(=)',
      beginCaptures: {1: {name: 'punctuation.separator.key-value.xml.svg'}},
      end: '(?=\\s*(?:[%?/]?>))|(?<=["\'])([^\\s>]*)|(?:\\G|^)\\s*([^\\s"\'>]+)',
      endCaptures: {
        1: {name: 'invalid.illegal.syntax.xml.svg'},
        2: {name: 'string.unquoted.xml.svg'}
      },
      patterns: [
        {match: '(?:\\G|^)\\s+(?!/?>)'},
        {
          begin: '"',
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.xml.svg'}
          },
          end: '"',
          endCaptures: {0: {name: 'punctuation.definition.string.end.xml.svg'}},
          name: 'string.quoted.double.xml.svg',
          patterns: [{include: '#entity'}]
        },
        {
          begin: "'",
          beginCaptures: {
            0: {name: 'punctuation.definition.string.begin.xml.svg'}
          },
          end: "'",
          endCaptures: {0: {name: 'punctuation.definition.string.end.xml.svg'}},
          name: 'string.quoted.single.xml.svg',
          patterns: [{include: '#entity'}]
        }
      ]
    },
    cdata: {
      begin: '<!\\[CDATA\\[',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.xml.svg'}},
      end: '\\]\\]>',
      endCaptures: {0: {name: 'punctuation.definition.string.end.xml.svg'}},
      name: 'string.unquoted.cdata.xml.svg'
    },
    commands: {
      patterns: [
        {
          match: '(?i)[MLHVCSQTAZ]',
          name: 'keyword.operator.drawing-command.xml.svg'
        },
        {
          match: '-?(?:\\d+(?:\\.\\d+)?|\\.\\d+)',
          name: 'constant.numeric.number.xml.svg'
        },
        {match: ',', name: 'punctuation.separator.coordinates.comma.xml.svg'}
      ]
    },
    comment: {
      begin: '<!--',
      beginCaptures: {
        0: {name: 'punctuation.definition.comment.begin.xml.svg'}
      },
      end: '-->',
      endCaptures: {0: {name: 'punctuation.definition.comment.end.xml.svg'}},
      name: 'comment.block.xml.svg',
      patterns: [
        {match: '--(?!>)', name: 'invalid.illegal.bad-comment.xml.svg'}
      ]
    },
    doctype: {
      begin: '(<!)(DOCTYPE)\\s+([:a-zA-Z_][-:\\w.]*)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.begin.xml.svg'},
        2: {name: 'keyword.other.doctype.xml.svg'},
        3: {name: 'variable.language.documentroot.xml.svg'}
      },
      end: '\\s*(>)',
      endCaptures: {1: {name: 'punctuation.definition.tag.end.xml.svg'}},
      name: 'meta.tag.sgml.doctype.xml.svg',
      patterns: [{include: 'text.xml#internalSubset'}]
    },
    entity: {
      patterns: [
        {include: 'text.xml#entity'},
        {include: 'text.xml#bare-ampersand'}
      ]
    },
    main: {
      patterns: [
        {include: '#comment'},
        {include: '#cdata'},
        {include: '#doctype'},
        {include: 'text.xml#EntityDecl'},
        {include: 'text.xml#parameterEntity'},
        {include: '#entity'},
        {include: '#preprocessor'},
        {include: '#scriptTag'},
        {include: '#styleTag'},
        {include: '#tag'},
        {include: '#unescapedBracket'},
        {include: '#unmatchedTag'}
      ]
    },
    preprocessor: {
      begin: '(<\\?)\\s*',
      beginCaptures: {1: {name: 'punctuation.definition.tag.begin.xml.svg'}},
      end: '\\?>',
      endCaptures: {0: {name: 'punctuation.definition.tag.end.xml.svg'}},
      name: 'meta.tag.preprocessor.xml.svg',
      patterns: [
        {
          begin: '\\G',
          end: '([-\\w]+)|(?=\\s*\\?>)',
          endCaptures: {1: {name: 'entity.name.tag.xml.svg'}}
        },
        {include: '#attr'}
      ]
    },
    scriptTag: {
      patterns: [{include: '#scriptTagPlain'}, {include: '#scriptTagJS'}]
    },
    scriptTagJS: {
      begin: '(?i)(<)(script)(?=$|\\s|/?>)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.opening.begin.xml.svg'},
        2: {patterns: [{include: '#tagName'}]}
      },
      end: '(?i)(</)(script)\\s*(>)|(/>)',
      endCaptures: {
        1: {name: 'punctuation.definition.tag.closing.begin.xml.svg'},
        2: {patterns: [{include: '#tagName'}]},
        3: {name: 'punctuation.definition.tag.closing.end.xml.svg'},
        4: {name: 'punctuation.definition.tag.self-closing.end.xml.svg'}
      },
      name: 'meta.tag.script.xml.svg',
      patterns: [
        {include: '#tagAttr'},
        {
          begin: '(?<=>)',
          contentName: 'source.js.embedded.xml.svg',
          end: '(?i)(?=\\s*</script\\s*>)',
          patterns: [{include: 'source.js'}, {include: '#entity'}]
        }
      ]
    },
    scriptTagPlain: {
      begin:
        '(?x)\n(<)((?i)script)\n(\n\t\\s+[^>]*?\n\t(?<=\\s)(?i:type)\\s*=\\s*\n\t(["\'])?\n\t(?! module\n\t|   application/(?:x-)?(?:ecma|java)script\n\t|   text/\n\t\t(?: javascript(?:1.[0-5])?\n\t\t|   (?:j|ecma|live)script\n\t\t|   x-(?:ecma|java)script\n\t\t)\n\t)\n\t(?: (?<=")(?:[^">]+)"\n\t|   (?<=\')(?:[^\'>]+)\'\n\t|   [^\\s"\'>]+\n\t)\n\t(?=\\s|/?>)\n)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.opening.begin.xml.svg'},
        2: {patterns: [{include: '#tagName'}]},
        3: {patterns: [{include: '#attr'}]}
      },
      end: '(?i)(</)(script)\\s*(>)|(/>)',
      endCaptures: {
        1: {name: 'punctuation.definition.tag.closing.begin.xml.svg'},
        2: {patterns: [{include: '#tagName'}]},
        3: {name: 'punctuation.definition.tag.closing.end.xml.svg'},
        4: {name: 'punctuation.definition.tag.self-closing.end.xml.svg'}
      },
      name: 'meta.tag.script.xml.svg',
      patterns: [{include: '#tagAttr'}, {include: '#main'}]
    },
    styleTag: {
      begin: '(?i)(<)(style)(?=$|\\s|/?>)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.opening.begin.xml.svg'},
        2: {patterns: [{include: '#tagName'}]}
      },
      end: '(?i)(</)(style)\\s*(>)|(/>)',
      endCaptures: {
        1: {name: 'punctuation.definition.tag.closing.begin.xml.svg'},
        2: {patterns: [{include: '#tagName'}]},
        3: {name: 'punctuation.definition.tag.closing.end.xml.svg'},
        4: {name: 'punctuation.definition.tag.self-closing.end.xml.svg'}
      },
      name: 'meta.tag.style.xml.svg',
      patterns: [
        {include: '#tagAttr'},
        {
          begin: '(?<=>)',
          contentName: 'source.css.embedded.xml.svg',
          end: '(?i)(?=\\s*</style\\s*>)',
          patterns: [{include: 'source.css'}, {include: '#entity'}]
        }
      ]
    },
    tag: {
      begin: '(?i)(<)([A-Za-z_:][-\\w.:]*)(?=$|\\s|/?>)',
      beginCaptures: {
        1: {name: 'punctuation.definition.tag.opening.begin.xml.svg'},
        2: {patterns: [{include: '#tagName'}]}
      },
      end: '(?i)(</)(\\2)(?:\\s*(>)|(?=\\s*$))|(/>)',
      endCaptures: {
        1: {name: 'punctuation.definition.tag.closing.begin.xml.svg'},
        2: {patterns: [{include: '#tagName'}]},
        3: {name: 'punctuation.definition.tag.closing.end.xml.svg'},
        4: {name: 'punctuation.definition.tag.self-closing.end.xml.svg'}
      },
      name: 'meta.tag.${2:/downcase}.xml.svg',
      patterns: [{include: '#tagAttr'}, {include: '#main'}]
    },
    tagAttr: {
      begin: '\\G(?!\\s*/>)',
      end: '>|(?=\\s*/>)',
      endCaptures: {
        0: {name: 'punctuation.definition.tag.opening.end.xml.svg'}
      },
      patterns: [{include: '#attr'}]
    },
    tagName: {
      patterns: [
        {
          captures: {
            1: {name: 'entity.name.tag.namespace.xml.svg'},
            2: {name: 'punctuation.separator.namespace.xml.svg'}
          },
          match: '(?:^|\\G)([A-Za-z_][-\\w.]*)(:)(?=[-\\w.:])'
        },
        {
          match: '[A-Za-z_:][-\\w.:]*',
          name: 'entity.name.tag.localname.xml.svg'
        }
      ]
    },
    unescapedBracket: {
      match: '^\\s*(>)',
      name: 'punctuation.definition.tag.closing.end.xml.svg'
    },
    unmatchedTag: {
      match: '(</)([A-Za-z_:][-\\w.:]*)\\s*(>)',
      name: 'invalid.illegal.unmatched-tag.xml.svg'
    }
  },
  scopeName: 'text.xml.svg'
}

export default grammar
